import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../product/models/Product';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-productblock',
  templateUrl: './productblock.component.html',
  styleUrls: ['./productblock.component.css']
})
export class ProductblockComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private router: Router, private activatedRoute: ActivatedRoute , private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  deleteProduct(): void {
    this.router.navigate([this.product.id], {
      relativeTo: this.activatedRoute,
      state: this.product
    });
    this.http.post<any>('http://localhost:8080/deleteproduct/' + this.product.id, this.product.id)
      .subscribe();
  }
}
