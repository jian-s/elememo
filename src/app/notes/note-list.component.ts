import { MemoModel } from './../model/memo.model';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { MemoState } from './../store/memo.state';
import { Component, Input } from '@angular/core';
import { Memo } from "model/Memo";
import { Store } from "@ngrx/store";

@Component({
  selector: 'ele-note-list',
  templateUrl: './note-list.component.html'
})
export class NoteListComponent {

  memos: Observable<List<MemoModel>>;

  constructor(
    private _memoStore: Store<MemoState>
  ) {
    this.memos = _memoStore.select('items');
  }
  
}
