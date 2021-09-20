import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jsonPlaceholderInterface } from 'src/app/module-main/models/placeholder.interface';
import { JsonPlaceholderService } from 'src/app/module-main/services/json-placeholder.service';

@Component({
  selector: 'app-my-own',
  templateUrl: './my-own.component.html',
  styleUrls: ['./my-own.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({  opacity: 0 }),
            animate('0.7s ease-out',
                    style({  opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({  opacity: 1 }),
            animate('0.0s ease-in',
                    style({  opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class MyOwnComponent implements OnInit {

  selectedUser: any = [];

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

  modal: boolean = false;

  constructor(
    private jsonplace: JsonPlaceholderService,
    private formBuilder: FormBuilder
  ) {
    this.formUser = this.formBuilder.group({
      ID: [{ value: '', disabled: true }, [Validators.required]],
      userTitle: ['', [Validators.required]],
      userBody: ['', [Validators.required, Validators.minLength(10)]],
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

  toggleModal() {
    setTimeout(() => {
      this.modal = !this.modal
    }, 100);
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
    this.selectedUser = user;
    this.formUser.patchValue({
      ID: user.id,
      userTitle: user.title,
      userBody: user.body,
    });
    this.userSelected = user;
  }

  save() {
    console.log('entre');

    let newUser: jsonPlaceholderInterface = {
      userId: this.IDField?.value,
      id: this.IDField?.value,
      title: this.userTitleField?.value,
      body: this.userBodyField?.value,
    };
    let index = this.users.findIndex(
      (userfind) => userfind == this.userSelected
    );
    console.log(newUser, index);
    if (this.formUser.valid && !this.flagEdit) {
      this.jsonplace.newOrEditUser( newUser, -1);
    } else {
      this.jsonplace.newOrEditUser( newUser, index);
    }
  }

  delete(user: jsonPlaceholderInterface) {
    let index = this.users.findIndex((userfind) => userfind == user);
    this.jsonplace.deleteUser(index);
  }

}
