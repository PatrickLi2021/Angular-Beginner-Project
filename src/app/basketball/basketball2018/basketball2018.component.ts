import { Component, OnInit } from '@angular/core';
import { BasketballService } from '../basketball.service';
import { IBasketball } from '../../basketball';

@Component({
  selector: 'app-basketball2018',
  templateUrl: './basketball2018.component.html',
  styleUrls: ['./basketball2018.component.css']
})
export class Basketball2018Component implements OnInit {

  public basketballPlayers2018: IBasketball[] = [];

  constructor(private _basketballService: BasketballService) { }

  ngOnInit(): void {
    this._basketballService.getBasketballPlayers2018().subscribe(data => this.basketballPlayers2018 = data)
  }

}
