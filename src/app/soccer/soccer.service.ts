import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISoccer } from '../soccer';

@Injectable({
  providedIn: 'root'
})
export class SoccerService {

  private _url: string = "/assets/data/soccer-players.json";

  constructor(private http: HttpClient) { }

  getSoccerPlayers(): Observable<ISoccer[]> {
    return this.http.get<ISoccer[]>(this._url);
  } 

}
