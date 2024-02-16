import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameQuoraloginComponent } from './Dashboard/game-quoralogin/game-quoralogin.component';
import { HomeComponent } from './Dashboard/home/home.component';

const routes: Routes = [


  {
    path:"",component:GameQuoraloginComponent
  },
  {
    path:"home",component:HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
