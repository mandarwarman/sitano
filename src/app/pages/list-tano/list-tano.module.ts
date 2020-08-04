import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from '@ionic/angular';

import { ListTanoPage } from './list-tano.page';

const routes: Routes = [
  {
    path: '',
    component: ListTanoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListTanoPage]
})
export class ListTanoPageModule {}
