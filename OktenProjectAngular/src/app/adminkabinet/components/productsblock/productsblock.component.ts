import { Component, OnInit } from '@angular/core';
import {ProductblockService} from '../../services/productblock.service';
import {Product} from '../../../product/models/Product';

@Component({
  selector: 'app-productsblock',
  templateUrl: './productsblock.component.html',
  styleUrls: ['./productsblock.component.css']
})
export class ProductsblockComponent implements OnInit {

  produuctblocks: Product[];
  constructor(private productblockService: ProductblockService) { }

  ngOnInit(): void {
    this.productblockService.getProducts().subscribe(value => this.produuctblocks = value);
  }

}
