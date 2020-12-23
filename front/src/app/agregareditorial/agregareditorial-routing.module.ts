import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregareditorialPage } from './agregareditorial.page';

const routes: Routes = [
  {
    path: '',
    component: AgregareditorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregareditorialPageRoutingModule {}
