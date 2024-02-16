import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameQuoraloginComponent } from './Dashboard/game-quoralogin/game-quoralogin.component';
import { GameQuoraHomeComponent } from './Dashboard/game-quora-home/game-quora-home.component';

@NgModule({
  declarations: [
    AppComponent,
    GameQuoraloginComponent,
    GameQuoraHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
