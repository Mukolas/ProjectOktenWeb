import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-zareyestruvatys',
  templateUrl: './zareyestruvatys.component.html',
  styleUrls: ['./zareyestruvatys.component.css']
})
export class ZareyestruvatysComponent implements OnInit {
  user = {
    pib: '',
    user_number: '',
    birth_date: '',
    user_email: '',
    username: '',
    password: '',
    gender: ''
  };

  constructor(private http: HttpClient) {}

  register(regForm: any): void {
    this.http.post<any>('http://localhost:8080/register', this.user)
      .subscribe();
  }

  ngOnInit(): void {
  }
}
