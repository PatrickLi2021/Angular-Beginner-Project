import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketballComponent } from './basketball/basketball.component';
import { FootballComponent } from './football/football.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SoccerComponent } from './soccer/soccer.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'soccer', component: SoccerComponent},
  { path: 'basketball', component: BasketballComponent},
  { path: 'football', component: FootballComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SoccerComponent, BasketballComponent, 
  HomeComponent, FootballComponent, PageNotFoundComponent]