import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-eliminarcliente',
  templateUrl: './eliminarcliente.page.html',
  styleUrls: ['./eliminarcliente.page.scss'],
})
export class EliminarclientePage implements OnInit {
codigo;
  constructor(private apiService :ApiService) { }

  ngOnInit() {
  }
 

eliminarCliente(){

  let data = {
    codigo: this.codigo
  }

  this.apiService.deleteCliente(data).subscribe(() => {
    console.log("cliente Eliminado");
  });
}
}

