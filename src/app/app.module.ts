import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { Soccer2018Component } from './soccer/soccer2018/soccer2018.component';
import { Soccer2019Component } from './soccer/soccer2019/soccer2019.component';
import { Soccer2020Component } from './soccer/soccer2020/soccer2020.component';
import { Soccer2021Component } from './soccer/soccer2021/soccer2021.component';
import { Basketball2018Component } from './basketball/basketball2018/basketball2018.component';
import { Basketball2019Component } from './basketball/basketball2019/basketball2019.component';
import { Basketball2020Component } from './basketball/basketball2020/basketball2020.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    Soccer2018Component,
    Soccer2019Component,
    Soccer2020Component,
    Soccer2021Component,
    Basketball2018Component,
    Basketball2019Component,
    Basketball2020Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }