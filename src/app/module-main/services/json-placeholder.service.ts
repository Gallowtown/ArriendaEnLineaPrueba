import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jsonPlaceholderInterface } from '../models/placeholder.interface';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  private serviceURL : string = 'https://jsonplaceholder.typicode.com/posts';
  private _response : jsonPlaceholderInterface[] = [];

  get results(): jsonPlaceholderInterface[] {
    return [...this._response]
  }

  constructor( private http: HttpClient ) {

   }

  searchInfo(){
    this.http.get<jsonPlaceholderInterface[]>(`${ this.serviceURL }`)
    .subscribe(( resp ) => {
      this._response = resp;
    }
    )
  }


}
