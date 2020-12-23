import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-agregarlibro',
  templateUrl: './agregarlibro.page.html',
  styleUrls: ['./agregarlibro.page.scss'],
})
export class AgregarlibroPage implements OnInit {
  codigo: any;
  nombre: any;
  autor: any;
  precio: any;

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




agregarLibro(){

  let data = {
    codigo: this.codigo,
    nombre: this.nombre,
    autor: this.autor,
    precio: this.precio
  }

  this.apiService.postLibro(data).subscribe(() => {
    console.log("Libro agregado");
  });
}
}
