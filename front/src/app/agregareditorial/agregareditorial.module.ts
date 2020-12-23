import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregareditorialPageRoutingModule } from './agregareditorial-routing.module';

import { AgregareditorialPage } from './agregareditorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregareditorialPageRoutingModule
  ],
  declarations: [AgregareditorialPage]
})
export class AgregareditorialPageModule {}
