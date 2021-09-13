import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../product/models/Product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductblockService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('http://localhost:8080/pomeshkannya');
  }
}
