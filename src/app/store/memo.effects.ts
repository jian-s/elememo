import { MemoModel } from './../model/memo.model';
import { CALLBACK_ACTION } from './memo.action';
import {Effect, Actions, toPayload} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { ADD_MEMO_ACTION, EDIT_MEMO_ACTION, DELETE_MEMO_ACTION } from "app/store/memo.action";

@Injectable()
export class MemoEffects {
  
  constructor(private action$: Actions) { }

  @Effect() add$ = this.action$
    .ofType(ADD_MEMO_ACTION)
    .map(toPayload)
    .map((data: MemoModel) => {
        let origin_data: MemoModel[] = localStorage.getItem('memos') ? JSON.parse(localStorage.getItem('memos')) : [];
        origin_data.push(data);
        localStorage.setItem('memos', JSON.stringify(origin_data));
        return data;
    })
    .switchMap((payload) => {
        return Observable.of({type: CALLBACK_ACTION, payload: payload, action: ADD_MEMO_ACTION, status: true})
    });

  @Effect() update$ = this.action$
    .ofType(EDIT_MEMO_ACTION)
    .map(toPayload)
    .map((data: MemoModel) => {
        let origin_data: MemoModel[] = localStorage.getItem('memos') ? JSON.parse(localStorage.getItem('memos')) : [];
        let index: number;
        origin_data.forEach((value, i) => {
            if(value.id === data.id) {
                index = i;
            }
        })
        origin_data.splice(index, 1, data);
        localStorage.setItem('memos', JSON.stringify(origin_data));
        return data;
    })
    .switchMap((payload) => {
        return Observable.of({type: CALLBACK_ACTION, payload: payload, action: EDIT_MEMO_ACTION, status: true})
    });

  @Effect() delete$ = this.action$
    .ofType(DELETE_MEMO_ACTION)
    .map(toPayload)
    .map((data: MemoModel) => {
        let origin_data: MemoModel[] = localStorage.getItem('memos') ? JSON.parse(localStorage.getItem('memos')) : [];
        let index: number;
        origin_data.forEach((value, i) => {
            if(value.id === data.id) {
                index = i;
            }
        })
        origin_data.splice(index, 1);
        localStorage.setItem('memos', JSON.stringify(origin_data));
        return data;
    })
    .switchMap((payload) => {
        return Observable.of({type: CALLBACK_ACTION, payload: payload, action: EDIT_MEMO_ACTION, status: true})
    });
}