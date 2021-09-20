import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleCRUDRoutingModule } from './module-crud-routing.module';
import { BootstrapComponent } from './pages/bootstrap/bootstrap.component';
import { MyOwnComponent } from './pages/my-own/my-own.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideComponent } from './base/side/side.component';
import { NavComponent } from './base/nav/nav.component';


@NgModule({
  declarations: [BootstrapComponent, MyOwnComponent, SideComponent, NavComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleCRUDRoutingModule
  ]
})
export class ModuleCRUDModule { }
