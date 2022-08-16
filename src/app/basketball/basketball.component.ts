import { Component, OnInit } from '@angular/core';
import { BasketballService } from './basketball.service'
import { IBasketball } from '../basketball';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-basketball',
  templateUrl: './basketball.component.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketballComponent implements OnInit {

  public basketballPlayers : IBasketball[] = [];

  constructor(private route: ActivatedRoute, private _basketballService: BasketballService, private router: Router) { }

  ngOnInit(): void {
  }

  show2018() {
    this.router.navigate(['basketball2018'], {relativeTo: this.route});
  }

  show2019() {
    this.router.navigate(['basketball2019'], {relativeTo: this.route});
  }

  show2020() {
    this.router.navigate(['basketball2020'], {relativeTo: this.route});
  }

}
