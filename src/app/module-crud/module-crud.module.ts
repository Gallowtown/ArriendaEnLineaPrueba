import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleCRUDRoutingModule } from './module-crud-routing.module';
import { NavComponent } from './base/nav/nav.component';
import { SideComponent } from './base/side/side.component';
import { BootstrapComponent } from './pages/bootstrap/bootstrap.component';
import { MyOwnComponent } from './pages/my-own/my-own.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavComponent, SideComponent, BootstrapComponent, MyOwnComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleCRUDRoutingModule
  ]
})
export class ModuleCRUDModule { }
