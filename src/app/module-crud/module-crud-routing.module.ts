import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from './pages/bootstrap/bootstrap.component';
import { MyOwnComponent } from './pages/my-own/my-own.component';

const routes: Routes = [
  {
    path: 'boots',
    component: BootstrapComponent
  },
  {
    path: 'myOwn',
    component: MyOwnComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleCRUDRoutingModule { }
