import { Injectable } from '@angular/core';
import {ActivatedRoute, Resolve, Router} from '@angular/router';
import {Product} from '../models/Product';
import {Observable} from 'rxjs';
import {ProductService} from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Product[]>{

  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  resolve(): Observable<Product[]> | Promise<Product[]> | Product[] {
    this.router.events.subscribe();
    switch (this.router.url){
      case '/':
        return this.productService.getProducts();
        break;
      case '/sortCostPlus':
        return this.productService.getProductsSortCostPlus();
      case '/sortCostMinus':
        return this.productService.getProductsSortCostMinus();
      case '/sortSquarePlus':
        return this.productService.getProductsSortSquarePlus();
      case '/sortSquareMinus':
        return this.productService.getProductsSortSquareMinus();
      case '/sortValueOfRoomPlus':
        return this.productService.getProductsSortValuesOfRoomPlus();
      case '/sortValueOfRoomMinus':
        return this.productService.getProductsSortValuersOfRoomMinus();
    }
    }
  }

