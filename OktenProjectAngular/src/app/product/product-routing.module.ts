import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductpageComponent} from './components/productpage/productpage.component';
import {ProductsComponent} from './components/products/products.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent, children: [
      {path: ':id', component: ProductpageComponent},
      {path: 'sortCostPlus', component: ProductsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
