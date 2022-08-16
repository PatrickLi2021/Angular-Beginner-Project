import { Component, OnInit } from '@angular/core';
import { SoccerService } from '../soccer.service';
import { ISoccer } from '../../soccer';


@Component({
  selector: 'app-soccer2018',
  templateUrl: './soccer2018.component.html',
  styleUrls: ['./soccer2018.component.css']
})
export class Soccer2018Component implements OnInit {

public soccerPlayers2018: ISoccer[] = [];

  constructor(private _soccerService: SoccerService) { }

  ngOnInit(): void {
    this._soccerService.getSoccerPlayers2018().subscribe(data => this.soccerPlayers2018 = data)
  }

}
