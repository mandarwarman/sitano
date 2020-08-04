import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
 
import { IonicModule } from '@ionic/angular';
 
import { MenuPage } from './menu.page';
 
const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'main',
        loadChildren: '../main/main.module#MainPageModule'
      },
      {
        path: 'list-tano',
        loadChildren: '../list-tano/list-tano.module#ListTanoPageModule'
      },
      {
        path: 'list-pengo',
        loadChildren: '../list-pengo/list-pengo.module#ListPengoPageModule'
      }
    ]    
  },
  {
    path: 'Peringatan',
    redirectTo: './pages/attention/attention.module#AttentionPageModule'
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ MenuPage ]
})
export class MenuPageModule { }