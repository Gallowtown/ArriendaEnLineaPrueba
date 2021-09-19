import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/module-main/services/json-placeholder.service';

@Component({
  selector: 'app-my-own',
  templateUrl: './my-own.component.html',
  styleUrls: ['./my-own.component.css']
})
export class MyOwnComponent implements OnInit {

  constructor( private jsonplace: JsonPlaceholderService ) { }

  ngOnInit(): void {
  }


}
