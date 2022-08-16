import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketballComponent } from './basketball/basketball.component';
import { FootballComponent } from './football/football.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SoccerComponent } from './soccer/soccer.component';
import { Soccer2018Component } from './soccer/soccer2018/soccer2018.component';
import { Soccer2019Component } from './soccer/soccer2019/soccer2019.component';
import { Soccer2020Component } from './soccer/soccer2020/soccer2020.component';
import { Soccer2021Component } from './soccer/soccer2021/soccer2021.component';
import { Basketball2018Component } from './basketball/basketball2018/basketball2018.component';
import { Basketball2019Component } from './basketball/basketball2019/basketball2019.component';
import { Basketball2020Component } from './basketball/basketball2020/basketball2020.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'soccer', component: SoccerComponent, children: [
    {path: 'soccer2018', component: Soccer2018Component},
    {path: 'soccer2019', component: Soccer2019Component},
    {path: 'soccer2020', component: Soccer2020Component},
    {path: 'soccer2021', component: Soccer2021Component}
    
  ]},
  { path: 'basketball', component: BasketballComponent, children: [
    {path: 'basketball2018', component: Basketball2018Component},
    {path: 'basketball2019', component: Basketball2019Component},
    {path: 'basketball2020', component: Basketball2020Component}
  ]},
  { path: 'football', component: FootballComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SoccerComponent, BasketballComponent, Basketball2018Component, Basketball2019Component, Basketball2020Component,  
  HomeComponent, FootballComponent, Soccer2018Component, Soccer2019Component, Soccer2020Component, PageNotFoundComponent]