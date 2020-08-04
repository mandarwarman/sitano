import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 
  pages = [
    {
      title: 'Beranda',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Informasi',
      children: [
        {
          title: 'Tanaman Obat',
          url: '/menu/list-tano',
          icon: 'leaf'
        },
        {
          title: 'Pengobatan',
          url: '/menu/list-pengo',
          icon: 'medkit'
        },
      ]
    },
    {
      title: 'Peringatan',
      url: '/attention',
      icon: 'warning'
    },
    {
      title: 'Tentang',
      url: '/tentang',
      icon: 'alert'
    },
  ];
 
  constructor() { }
 
  ngOnInit() {
  }
 
}