import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Dashboard/layout/home/home.component';
import { ReglogComponent } from './Dashboard/reglog/reglog.component';
import { MainpageComponent } from './Dashboard/layout/mainpage/mainpage.component';
import { DiscoverspaceComponent } from './Dashboard/layout/discoverspace/discoverspace.component';
import { QuestionComponent } from './Dashboard/layout/question/question.component';
import { LayoutComponent } from './Dashboard/layout/layout.component';
import { NavbarComponent } from './Dashboard/layout/navbar/navbar.component';
import { ErrorpageComponent } from './Dashboard/errorpage/errorpage.component';

const routes: Routes = [

  
  {
    path:"",component:ReglogComponent,title:"GameQuora-Login"
  },
  
  {
    path:"layot",component:LayoutComponent,children:[
      {
        path:"",component:HomeComponent,
      },
      {
        path:"nav",component:NavbarComponent
      },
       {
        path:"main",component:MainpageComponent
       },
       {
        path:"disc",component:DiscoverspaceComponent
       },
       {
        path:"ques",component:QuestionComponent
       }
    ]
  },
  {
    path:"**",component:ErrorpageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
