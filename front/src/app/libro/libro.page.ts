import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {
libros: any;
  constructor(private apiService :ApiService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getLibro();
  }

  getLibro(){
    this.apiService.getLibro().subscribe((data) =>{
      this.libros = data;
      console.log(this.libros);
    })
  }
}
