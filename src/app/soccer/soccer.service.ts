import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISoccer } from '../soccer';

@Injectable({
  providedIn: 'root'
})
export class SoccerService {

  private rankings_2018: string = "/assets/data/soccer-players-2018.json";
  private rankings_2019: string = "/assets/data/soccer-players-2019.json";
  private rankings_2020: string = "/assets/data/soccer-players-2020.json";
  private rankings_2021: string = "/assets/data/soccer-players-2021.json";

  constructor(private http: HttpClient) { }

  getSoccerPlayers2018(): Observable<ISoccer[]> {
    return this.http.get<ISoccer[]>(this.rankings_2018);
  } 

  getSoccerPlayers2019(): Observable<ISoccer[]> {
    return this.http.get<ISoccer[]>(this.rankings_2019);
  } 

  getSoccerPlayers2020(): Observable<ISoccer[]> {
    return this.http.get<ISoccer[]>(this.rankings_2020);
  } 

  getSoccerPlayers2021(): Observable<ISoccer[]> {
    return this.http.get<ISoccer[]>(this.rankings_2021);
  } 

}