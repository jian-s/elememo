
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTabsModule } from '@angular/material';

import { NavComponent } from './nav.component';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdTabsModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
