import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SquareComponent } from './components/square/square.component';
import { BoardComponent } from './components/board/board.component';
import {HeaderComponent} from './components/header/header.component';

import {NgxsModule} from "@ngxs/store";
import {PlayStore} from "./store/store";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,

    NgxsModule.forRoot([PlayStore]),

    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
