
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MemoListComponent } from './memo-list.component';
import { NotesModule } from './notes/notes.module';

@NgModule({
  declarations: [
    MemoListComponent
  ],
  imports: [
    BrowserModule,
    NotesModule
  ],
  exports: [
    MemoListComponent
  ]
})
export class MemosModule { }
