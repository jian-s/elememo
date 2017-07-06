import { NavTab } from 'model/NavTab';
import { AppService } from '../app.service';
import { Component } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'ele-nav',
  template: `
    <md-tab-group (selectChange)="switchNav($event)">
        <md-tab label="Tab 1">Content 1</md-tab>
        <md-tab label="Tab 2">Content 2</md-tab>
    </md-tab-group>
  `
})
export class NavComponent {

    nav: Observable<NavTab>;

    memo = NavTab.MEMO;
    other = NavTab.OTHER;
  
    constructor(
        private _appService: AppService
    ) {
        this.nav = _appService.getNavStatus();
    }

    switchNav(tab) {
        switch(tab.index) {
            case 0:
                this._appService.switchTab(this.memo);
                break;
            case 1:
                this._appService.switchTab(this.other);
                break;
            default:
                throw new ReferenceError(`No such tab reference.`)
        }
    }


}
