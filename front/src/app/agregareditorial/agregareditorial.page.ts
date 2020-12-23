import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-agregareditorial',
  templateUrl: './agregareditorial.page.html',
  styleUrls: ['./agregareditorial.page.scss'],
})
export class AgregareditorialPage implements OnInit {
codigo: any;
nombre: any;
pais: any;
formato: any;
  constructor(private apiService: ApiService,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  async mensajeGuardar(){
    const toast = await this.toastController.create({
      message: 'Guardado con éxito',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }




agregarEditorial(){

  let data = {
    codigo: this.codigo,
    nombre: this.nombre,
    pais: this.pais,
    formato: this.formato,
  }

  this.apiService.postEditorial(data).subscribe(() => {
    console.log("Editorial creado");
  });
}
}
