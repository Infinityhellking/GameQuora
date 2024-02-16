import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameQuoraloginComponent } from './Dashboard/game-quoralogin/game-quoralogin.component';
import { HomeComponent } from './Dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GameQuoraloginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
