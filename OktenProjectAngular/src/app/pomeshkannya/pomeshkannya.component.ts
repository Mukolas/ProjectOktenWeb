import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pomeshkannya',
  templateUrl: './pomeshkannya.component.html',
  styleUrls: ['./pomeshkannya.component.css']
})
export class PomeshkannyaComponent implements OnInit {
  products: any[];

  constructor(private router: Router , private activatedRoute: ActivatedRoute) {}

@Input()
  linkSort = '/sortCostPlus';

  ngOnInit(): void {
  }

}
