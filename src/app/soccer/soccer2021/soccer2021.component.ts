import { Component, OnInit } from '@angular/core';
import { SoccerService } from '../soccer.service';
import { ISoccer } from '../../soccer';

@Component({
  selector: 'app-soccer2021',
  templateUrl: './soccer2021.component.html',
  styleUrls: ['./soccer2021.component.css']
})
export class Soccer2021Component implements OnInit {

public soccerPlayers2021: ISoccer[] = [];

  constructor(private _soccerService: SoccerService) { }

  ngOnInit(): void {
    this._soccerService.getSoccerPlayers2021().subscribe(data => this.soccerPlayers2021 = data)
  }

}
