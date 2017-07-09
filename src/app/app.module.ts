
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NotesModule } from './notes/notes.module';
import { AppService } from './app.service';
import { NavModule } from './nav/nav.module';
import { memoReducer } from "app/store/memo.reducer";
import { INITIAL_MEMO_STATE } from "app/store/memo.state";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdTabsModule,
    NotesModule,
    NavModule,
    StoreModule.provideStore(memoReducer, INITIAL_MEMO_STATE),
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
