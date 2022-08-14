import { Component, OnInit } from '@angular/core';
import { SoccerService } from './soccer.service';
import { ISoccer } from '../soccer';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent implements OnInit {


  public soccerPlayers : ISoccer[] = [];
  constructor(private _soccerService: SoccerService) { }

  ngOnInit(): void {
    this._soccerService.getSoccerPlayers().subscribe(data => this.soccerPlayers = data)
  }

  
}
