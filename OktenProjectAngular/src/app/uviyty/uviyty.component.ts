import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-uviyty',
  templateUrl: './uviyty.component.html',
  styleUrls: ['./uviyty.component.css']
})
export class UviytyComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient) { }


  login(logForm: any): void {
    this.http.post<any>('http://localhost:8080/login', this.user)
      .subscribe();
  }

  ngOnInit(): void {
  }

}
