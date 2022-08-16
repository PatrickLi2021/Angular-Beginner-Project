import { Component, OnInit } from '@angular/core';
import { SoccerService } from '../soccer.service';
import { ISoccer } from '../../soccer';


@Component({
  selector: 'app-soccer2020',
  templateUrl: './soccer2020.component.html',
  styleUrls: ['./soccer2020.component.css']
})
export class Soccer2020Component implements OnInit {

public soccerPlayers2020: ISoccer[] = [];

  constructor(private _soccerService: SoccerService) { }

  ngOnInit(): void {
    this._soccerService.getSoccerPlayers2020().subscribe(data => this.soccerPlayers2020 = data)
  }

}
