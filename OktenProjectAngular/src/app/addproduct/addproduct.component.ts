import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
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

  addproduct(prodForm: any): void {
    this.http.post<any>('http://localhost:8080/addproduct', this.product)
      .subscribe();
  }

  ngOnInit(): void {
  }


}
