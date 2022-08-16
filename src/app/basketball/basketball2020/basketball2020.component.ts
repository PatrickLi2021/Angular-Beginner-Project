import { Component, OnInit } from '@angular/core';
import { BasketballService } from '../basketball.service';
import { IBasketball } from '../../basketball';

@Component({
  selector: 'app-basketball2020',
  templateUrl: './basketball2020.component.html',
  styleUrls: ['./basketball2020.component.css']
})
export class Basketball2020Component implements OnInit {

  public basketballPlayers2020: IBasketball[] = [];

  constructor(private _basketballService: BasketballService) { }

  ngOnInit(): void {
    this._basketballService.getBasketballPlayers2020().subscribe(data => this.basketballPlayers2020 = data)
  }

}
