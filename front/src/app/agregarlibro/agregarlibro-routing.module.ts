import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarlibroPage } from './agregarlibro.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarlibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarlibroPageRoutingModule {}
