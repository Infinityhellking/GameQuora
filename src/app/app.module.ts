import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Dashboard/layout/home/home.component';
import { ReglogComponent } from './Dashboard/reglog/reglog.component';
import { MainpageComponent } from './Dashboard/layout/mainpage/mainpage.component';
import { DiscoverspaceComponent } from './Dashboard/layout/discoverspace/discoverspace.component';
import { QuestionComponent } from './Dashboard/layout/question/question.component';
import { LayoutComponent } from './Dashboard/layout/layout.component';
import { NavbarComponent } from './Dashboard/layout/navbar/navbar.component';
import { ErrorpageComponent } from './Dashboard/errorpage/errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReglogComponent,
    MainpageComponent,
    DiscoverspaceComponent,
    QuestionComponent,
    LayoutComponent,
    NavbarComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
