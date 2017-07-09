import { MemoModel } from './../model/memo.model';
import { AddMemoAction } from './../store/memo.action';
import { MemoState } from 'app/store/memo.state';
import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ele-note-area',
  templateUrl: './note-area.component.html'
})
export class NoteAreaComponent {

  constructor(
    private _memoStore: Store<MemoState>
  ){}

  onAdd(input) {
    if(input.value.length > 0) {
      let new_memo: MemoModel = {
        id: this.guid(),
        title: input.value.length > 20 ? input.value.length.substring(0,20) + "..." : input.value,
        content: input.value,
        date: new Date()
      }
      this._memoStore.dispatch(new AddMemoAction(new_memo));
    }
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}
