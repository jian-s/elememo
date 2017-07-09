import { NoteListComponent } from './note-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdListModule, MdButtonModule } from '@angular/material';

import { NotesComponent } from './notes.component';
import { NoteAreaComponent } from "./note-area.component";

@NgModule({
  declarations: [
    NotesComponent,
    NoteListComponent,
    NoteAreaComponent
  ],
  imports: [
    BrowserModule,
    MdListModule,
    MdButtonModule
  ],
  exports: [
    NotesComponent
  ]
})
export class NotesModule { }
