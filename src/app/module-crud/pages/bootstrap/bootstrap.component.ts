import { Component, OnInit } from '@angular/core';
import { jsonPlaceholderInterface } from 'src/app/module-main/models/placeholder.interface';
import { JsonPlaceholderService } from 'src/app/module-main/services/json-placeholder.service';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {

  get users(): jsonPlaceholderInterface[] {
    return this.jsonplace.results;
  }

  constructor( private jsonplace: JsonPlaceholderService ) { }

  ngOnInit(): void {
    this.jsonplace.searchInfo();
  }

  search() {
    this.jsonplace.searchInfo()
  }

}
