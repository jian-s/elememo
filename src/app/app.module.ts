
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { MemosModule } from './memo/memos.module';
import { memoReducer } from "app/store/memo.reducer";
import { INITIAL_MEMO_STATE } from "app/store/memo.state";
import { MemoEffects } from './store/memo.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MemosModule,
    StoreModule.provideStore(memoReducer, INITIAL_MEMO_STATE),
    EffectsModule.run(MemoEffects),
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
