import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ModuleMainRoutingModule } from './module-main-routing.module';
import { SharedComponent } from './shared/shared.component';


@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    ModuleMainRoutingModule,
    HttpClientModule,
  ]
})
export class ModuleMainModule { }
