import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.page.html',
  styleUrls: ['./editorial.page.scss'],
})
export class EditorialPage implements OnInit {
editorials: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.getEditorial();
  }

  getEditorial(){
    this.apiService.getEditorial().subscribe((data) =>{
      this.editorials = data;
      console.log(this.editorials);
    })
  }
}

