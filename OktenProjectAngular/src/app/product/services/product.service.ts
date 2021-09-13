import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/Product';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient, router: Router) { }

  getProducts(): Observable<Product[]> {
      return this.httpClient.get<Product[]>('http://localhost:8080/pomeshkannya');
  }
  getProductsSortCostPlus(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('http://localhost:8080/sortCostPlus');
  }
  getProductsSortCostMinus(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('http://localhost:8080/sortCostMinus');
  }
  getProductsSortSquarePlus(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('http://localhost:8080/sortSquarePlus');
  }
  getProductsSortSquareMinus(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('http://localhost:8080/sortSquareMinus');
  }
  getProductsSortValuesOfRoomPlus(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('http://localhost:8080/sortValueOfRoomPlus');
  }
  getProductsSortValuersOfRoomMinus(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('http://localhost:8080/sortValueOfRoomMinus');
  }
}
