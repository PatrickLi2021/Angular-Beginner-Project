import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasketball } from '../basketball';


@Injectable({
  providedIn: 'root'
})
export class BasketballService {

  private rankings_2018: string = "/assets/data/basketball-players-2018.json";
  private rankings_2019: string = "/assets/data/basketball-players-2019.json";
  private rankings_2020: string = "/assets/data/basketball-players-2020.json";

  constructor(private http: HttpClient) { }

  getBasketballPlayers2018(): Observable<IBasketball[]> {
    return this.http.get<IBasketball[]>(this.rankings_2018);
  } 

  getBasketballPlayers2019(): Observable<IBasketball[]> {
    return this.http.get<IBasketball[]>(this.rankings_2019);
  } 

  getBasketballPlayers2020(): Observable<IBasketball[]> {
    return this.http.get<IBasketball[]>(this.rankings_2020);
  } 
}
