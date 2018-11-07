import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { EvenComponent } from './assignment4/even/even.component';
import { AssignmentsTsComponent } from './assignments-ts/assignments-ts.component';


@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    Assignment4Component,
    OddComponent,
    GameControlComponent,
    EvenComponent,
    AssignmentsTsComponent,
    

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
