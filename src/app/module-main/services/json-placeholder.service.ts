import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jsonPlaceholderInterface } from '../models/placeholder.interface';
// Holi Angey!

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  private serviceURL: string = 'https://jsonplaceholder.typicode.com/posts';
  private _response: jsonPlaceholderInterface[] = [];
  private _selectedUser: jsonPlaceholderInterface = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };

  get selectedUser(): jsonPlaceholderInterface {
    return this._selectedUser;
  }

  get results(): jsonPlaceholderInterface[] {
    return [...this._response];
  }

  constructor(private http: HttpClient) {
    this._response = JSON.parse(localStorage.getItem('users')!) || [];
  }

  setResults(results: jsonPlaceholderInterface[]) {
    this._response = results;
  }

  deleteUser(index: number) {
    this._response.splice(index, 1);
    this._response.filter((user, index) => (user.id = index + 1, user.userId = index + 1));
    localStorage.setItem('users', JSON.stringify(this._response));
  }

  newOrEditUser( user: jsonPlaceholderInterface, index: number) {
    console.log( index );

    if (index == -1) {
      this._response.push( user );
      this._response.filter((user, index) => (user.id = index + 1, user.userId = index + 1));
    } else {
      this._response[index] = user
    }
    localStorage.setItem('users', JSON.stringify(this._response));
  }

  searchInfo() {
    this.http
      .get<jsonPlaceholderInterface[]>(`${this.serviceURL}`)
      .subscribe((resp) => {
        this._response = resp;
        localStorage.setItem('users', JSON.stringify(this._response));
      });
  }
}
