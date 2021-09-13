import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addpropositions',
  templateUrl: './addpropositions.component.html',
  styleUrls: ['./addpropositions.component.css']
})
export class AddpropositionsComponent implements OnInit {
  product = {
    picture: '',
    whereis: '',
    valuesOfRoom: '',
    square: '',
    pet: '',
    forniture: '',
    moreInformation: '',
    morePicture: '',
    cost: ''
  };

  constructor(private http: HttpClient) {
  }

  addproposition(prodForm: any): void {
    this.http.post<any>('http://localhost:8080/addProposition', this.product)
      .subscribe();
  }

  ngOnInit(): void {
  }

}
