import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi:"http://localhost:3000/api/clientes";
  cliente;
  libro;
  editorial;

  constructor(private http: HttpClient) { }

  getClientes(){

    return this.http.get("http://localhost:3000/api/clientes");
    
  }

  postCliente(cliente){
    return this.http.post("http://localhost:3000/api/clientes", cliente);
  }

  deleteCliente(cliente){
    return this.http.delete("http://localhost:3000/api/clientes", cliente);
  }

  getLibro(){
    return this.http.get("http://localhost:3000/api/libros");
  }

  postLibro(libro){
    return this.http.post("http://localhost:3000/api/libros", libro);
  }

  getEditorial(){
    return this.http.get("http://localhost:3000/api/editorial");
  }

  postEditorial(editorial){
    return this.http.post("http://localhost:3000/api/editorial", editorial);
  }
}
