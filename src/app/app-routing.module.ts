import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'detail-tano/:id', loadChildren: './pages/detail-tano/detail-tano.module#DetailTanoPageModule' },
  { path: 'pengo-detail/:id', loadChildren: './pages/pengo-detail/pengo-detail.module#PengoDetailPageModule' },
  { path: 'attention', loadChildren: './pages/attention/attention.module#AttentionPageModule' },
  { path: 'tentang', loadChildren: './pages/tentang/tentang.module#TentangPageModule' },
 ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }