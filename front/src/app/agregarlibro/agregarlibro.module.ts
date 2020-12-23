import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarlibroPageRoutingModule } from './agregarlibro-routing.module';

import { AgregarlibroPage } from './agregarlibro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarlibroPageRoutingModule
  ],
  declarations: [AgregarlibroPage]
})
export class AgregarlibroPageModule {}
