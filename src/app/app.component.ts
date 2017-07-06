

import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { NavTab } from 'model/NavTab';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navStatus: Observable<NavTab>;
  MemoTab =  NavTab.MEMO;

  constructor(
    private _appService: AppService
  ) {
    this.navStatus = this._appService.getNavStatus();
  }


}
