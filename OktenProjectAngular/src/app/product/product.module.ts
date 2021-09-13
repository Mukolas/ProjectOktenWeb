import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import {ProductsComponent} from './components/products/products.component';
import {ProductComponent} from './components/product/product.component';
import {ProductService} from './services/product.service';
import {HttpClientModule} from '@angular/common/http';
import {ProductpageComponent} from './components/productpage/productpage.component';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './components/product/search.pipe';




@NgModule({
  declarations: [ProductsComponent, ProductComponent, SearchPipe],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [HttpClientModule],
  providers: [ProductService]
})
export class ProductModule { }
