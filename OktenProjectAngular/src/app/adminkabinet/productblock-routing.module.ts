import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsblockComponent} from './components/productsblock/productsblock.component';
import {UsersComponent} from './components/users/users.component';
import {ProductpageComponent} from '../product/components/productpage/productpage.component';

const routes: Routes = [
  {path: 'toProducts' , component : ProductsblockComponent, children: [
      {path: ':id'}]},
  {path: 'toUsers' , component : UsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductblockRoutingModule { }
