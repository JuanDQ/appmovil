import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Clientes',
      url: '/folder/Inbox',
      icon: 'person'
    },
    {
      title: 'crear Clientes',
      url: '/crearcliente',
      icon: 'paper-plane'
    },
    {
      title: 'Eliminar Cliente',
      url: '/eliminarcliente',
      icon: 'trash'
    },
    {
      title: 'Libros',
      url: '/libro',
      icon: 'library'
    },
    {
      title: 'Agregar Libro',
      url: '/agregarlibro',
      icon: 'archive'
    },
    {
      title: 'Editorial',
      url: '/editorial',
      icon: 'pencil'
    },
    {
      title: 'Agregar editorial',
      url: '/agregareditorial',
      icon: 'folder'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
