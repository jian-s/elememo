import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdListModule } from '@angular/material';

import { NotesComponent } from './notes.component';

@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [
    BrowserModule,
    MdListModule
  ],
  exports: [
    NotesComponent
  ]
})
export class NotesModule { }
