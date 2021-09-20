import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'crud',
    loadChildren: () =>
      import('src/app/module-crud/module-crud.module').then(
        (m) => m.ModuleCRUDModule
      ),
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('src/app/module-main/module-main.module').then(
        (m) => m.ModuleMainModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('src/app/module-main/module-main.module').then(
        (m) => m.ModuleMainModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
