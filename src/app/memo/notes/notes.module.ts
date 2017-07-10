import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NoteAreaComponent } from "./note-area.component";

@NgModule({
  declarations: [
    NoteAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    NoteAreaComponent
  ]
})
export class NotesModule { }
