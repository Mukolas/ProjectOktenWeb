import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../product/models/User';

@Component({
  selector: 'app-userkabinet',
  templateUrl: './userkabinet.component.html',
  styleUrls: ['./userkabinet.component.css']
})
export class UserkabinetComponent implements OnInit {


  @Input()
  user: User;

  constructor(private  router: Router) { }

  ngOnInit(): void {
  }

  toAdminKabinet(): void {
    this.router.navigate(['adminkabinet']);
  }

  addProposition(): void {
    this.router.navigate(['addProposition']);
  }
}
