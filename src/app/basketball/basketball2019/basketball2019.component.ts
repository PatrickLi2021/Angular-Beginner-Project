import { Component, OnInit } from '@angular/core';
import { BasketballService } from '../basketball.service';
import { IBasketball } from '../../basketball';

@Component({
  selector: 'app-basketball2019',
  templateUrl: './basketball2019.component.html',
  styleUrls: ['./basketball2019.component.css']
})
export class Basketball2019Component implements OnInit {

  public basketballPlayers2019: IBasketball[] = [];

  constructor(private _basketballService: BasketballService) { }

  ngOnInit(): void {
    this._basketballService.getBasketballPlayers2019().subscribe(data => this.basketballPlayers2019 = data)
  }

}
