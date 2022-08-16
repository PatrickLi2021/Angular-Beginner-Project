import { Component, OnInit } from '@angular/core';
import { SoccerService } from '../soccer.service';
import { ISoccer } from '../../soccer';


@Component({
  selector: 'app-soccer2019',
  templateUrl: './soccer2019.component.html',
  styleUrls: ['./soccer2019.component.css']
})
export class Soccer2019Component implements OnInit {

public soccerPlayers2019: ISoccer[] = [];

  constructor(private _soccerService: SoccerService) { }

  ngOnInit(): void {
    this._soccerService.getSoccerPlayers2019().subscribe(data => this.soccerPlayers2019 = data)
  }

}
