import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameQuoraloginComponent } from './Dashboard/game-quoralogin/game-quoralogin.component';

const routes: Routes = [


  {
    path:"",component:GameQuoraloginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
