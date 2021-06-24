import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SlotComponent } from './components/slot/slot.component';
import { BoardComponent } from './components/board/board.component';
import {NgxsModule} from "@ngxs/store";
import {PlayStore} from "./store/store";

@NgModule({
  declarations: [
    AppComponent,
    SlotComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,

    NgxsModule.forRoot([PlayStore])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
