

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { NavTab } from "model/NavTab";

@Injectable()
export class AppService {

    private navStatus = new BehaviorSubject<NavTab>(NavTab.MEMO);

    switchTab(tab: NavTab): void {
        switch(tab) {
            case NavTab.MEMO:
                this.navStatus.next(NavTab.MEMO);
                break;
            case NavTab.NEW:
                this.navStatus.next(NavTab.NEW);
                break;
            default:
                throw new RangeError(`Can not find tab '${tab}'`)
        }
    }

    getNavStatus() {
        return this.navStatus.asObservable();
    }
}