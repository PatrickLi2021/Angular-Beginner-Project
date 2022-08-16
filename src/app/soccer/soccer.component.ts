import { Component, OnInit } from '@angular/core';
import { SoccerService } from './soccer.service';
import { ISoccer } from '../soccer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent implements OnInit {


  public soccerPlayers : ISoccer[] = [];
  constructor(private route: ActivatedRoute, private _soccerService: SoccerService, private router: Router) { }

  ngOnInit(): void {

  }

  show2018() {
    this.router.navigate(['soccer2018'], {relativeTo: this.route});
  }
  
  show2019() {
    this.router.navigate(['soccer2019'], {relativeTo: this.route});
  }

  show2020() {
    this.router.navigate(['soccer2020'], {relativeTo: this.route});
  }

  show2021() {
    this.router.navigate(['soccer2021'], {relativeTo: this.route});
  }

}
