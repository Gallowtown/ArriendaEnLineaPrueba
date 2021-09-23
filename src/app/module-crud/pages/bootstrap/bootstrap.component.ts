import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jsonPlaceholderInterface } from 'src/app/module-main/models/placeholder.interface';
import { JsonPlaceholderService } from 'src/app/module-main/services/json-placeholder.service';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css'],
})
export class BootstrapComponent implements OnInit {
  get selectedUser(): jsonPlaceholderInterface {
    return this.jsonplace.selectedUser;
  }

  get users(): jsonPlaceholderInterface[] {
    return this.jsonplace.results;
  }

  formUser: FormGroup;
  flagEdit: boolean = false;
  userSelected: jsonPlaceholderInterface = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };

  constructor(
    private jsonplace: JsonPlaceholderService,
    private formBuilder: FormBuilder
  ) {
    this.formUser = this.formBuilder.group({
      ID: [{ value: '', disabled: true }, [Validators.required]],
      userTitle: ['', [Validators.required]],
      userBody: ['', [Validators.required, Validators.maxLength(210)]],
    });
  }

  ngOnInit(): void {
    this.users.length == 0 && this.jsonplace.searchInfo();
  }

  get IDField() {
    return this.formUser.get('ID');
  }
  get userTitleField() {
    return this.formUser.get('userTitle');
  }
  get userBodyField() {
    return this.formUser.get('userBody');
  }

  add() {
    this.flagEdit = false;
    this.formUser.reset();
    this.formUser.patchValue({
      ID: this.users.length + 1,
    });
    this.userSelected = { userId: 0, id: 0, title: '', body: '' };
  }

  edit(user: jsonPlaceholderInterface) {
    this.flagEdit = true;
    this.formUser.patchValue({
      ID: user.id,
      userTitle: user.title,
      userBody: user.body,
    });
    this.userSelected = user;
  }

  save() {
    let newUser: jsonPlaceholderInterface = {
      userId: this.IDField?.value,
      id: this.IDField?.value,
      title: this.userTitleField?.value,
      body: this.userBodyField?.value,
    };
    console.log(this.userSelected);

    let index = this.users.findIndex(
      (userfind) => userfind == this.userSelected
    );
    if (this.formUser.valid) {
      if (  !this.flagEdit) {
        this.jsonplace.newOrEditUser( newUser, -1);
      } else {
        this.jsonplace.newOrEditUser( newUser, index);
      }
    } else {
      this.formUser.markAllAsTouched();
    }
  }

  delete(user: jsonPlaceholderInterface) {
    let index = this.users.findIndex((userfind) => userfind == user);
    this.jsonplace.deleteUser(index);
  }
}
