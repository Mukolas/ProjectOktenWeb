import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   products: Product[];
   searchId = '';
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.router.events.subscribe();
    console.log(this.router.url);
    switch (this.router.url) {
      case '/pomeshkannya':
        this.productService.getProducts().subscribe(value => this.products = value);
        break;
      case '/pomeshkannya/sortCostPlus':
        console.log('work1');
        this.productService.getProductsSortCostPlus().subscribe(value => this.products = value);
        break;
      case '/pomeshkannya/sortCostMinus':
        this.productService.getProductsSortCostMinus().subscribe(value => this.products = value);
        break;
      case '/pomeshkannya/sortSquarePlus':
        this.productService.getProductsSortSquarePlus().subscribe(value => this.products = value);
        break;
      case '/pomeshkannya/sortSquareMinus':
        this.productService.getProductsSortSquareMinus().subscribe(value => this.products = value);
        break;
      case '/pomeshkannya/sortValueOfRoomPlus':
        this.productService.getProductsSortValuesOfRoomPlus().subscribe(value => this.products = value);
        break;
      case '/pomeshkannya/sortValueOfRoomMinus':
        this.productService.getProductsSortValuersOfRoomMinus().subscribe(value => this.products = value);
        break;
    }
  }
}
