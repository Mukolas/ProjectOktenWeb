import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductblockComponent} from './components/productblock/productblock.component';
import {AdminkabinetComponent} from './adminkabinet.component';
import {ProductblockService} from './services/productblock.service';
import {ProductblockRoutingModule} from './productblock-routing.module';
import { ProductsblockComponent } from './components/productsblock/productsblock.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [ProductblockComponent, ProductsblockComponent, UserComponent, UsersComponent],
  imports: [
    CommonModule,
    ProductblockRoutingModule,
    HttpClientModule
  ],
  exports: [
    ProductblockComponent,
    HttpClientModule
  ],
  providers: [ProductblockService]
})
export class ProductblockModule { }
