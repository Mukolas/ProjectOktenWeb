import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product/models/Product';

@Component({
  selector: 'app-adminkabinet',
  templateUrl: './adminkabinet.component.html',
  styleUrls: ['./adminkabinet.component.css']
})
export class AdminkabinetComponent implements OnInit {

  @Input()
  products: Product[];
  searchId = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log(this.activatedRoute.data.subscribe(value => this.products = value.productsData));
  }

  ngOnInit(): void {
  }

  toProducts(): void{
    this.router.navigate(['toProducts'], {
      relativeTo: this.activatedRoute,
    });
  }

  toUsers(): void{
    this.router.navigate(['toUsers'], {
      relativeTo: this.activatedRoute,
    });
  }
  addProduct(): void {
    this.router.navigate(['addproduct']);
  }

}
