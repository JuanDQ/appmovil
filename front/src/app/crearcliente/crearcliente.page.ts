import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-crearcliente',
  templateUrl: './crearcliente.page.html',
  styleUrls: ['./crearcliente.page.scss'],
})
export class CrearclientePage implements OnInit {
codigo: any;
cedula: any;
nombre: any;
apellido: any;
telefono: any;
email: any;
 
  constructor(private apiService: ApiService,
    public toastController: ToastController) { }

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
 



  agregarCliente(){

    let data = {
      codigo: this.codigo,
      cedula: this.cedula,
      nombre: this.nombre,
      apellido: this.apellido,
      telefono: this.telefono,
      email: this.email
    }

    this.apiService.postCliente(data).subscribe(() => {
      /*this.codigo ="",
      this.cedula ="",
      this.nombre ="",
      this.apellido = "",
      this.telefono = "",
      this.email ="";
      this.mensajeGuardar();*/
      console.log("Cliente creado");
    });
  }
}
