import { DeleteMemoAction } from 'app/store/memo.action';
import { NoteAreaComponent } from './notes/note-area.component';
import { MemoModel } from 'app/model/memo.model';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { MemoState } from 'app/store/memo.state';
import { Component, Input, ViewChild, forwardRef } from '@angular/core';
import { Memo } from "model/Memo";
import { Store } from "@ngrx/store";

@Component({
  selector: 'ele-memo-list',
  templateUrl: './memo-list.component.html'
})
export class MemoListComponent {

  memos: Observable<List<MemoModel>>;
  activedIndex: number;

  activedMemo: MemoModel;

  constructor(
    private _memoStore: Store<MemoState>
  ) {
    this.memos = _memoStore.select('items');
  }

  onToggle(i: number) {
    if(i === this.activedIndex) {
      this.activedIndex = null;
      return;
    }
    this.activedIndex = i;
  }

  onEdit(memo: MemoModel) {
    this.activedMemo = memo;
  }

  onDelete(memo: MemoModel) {
    this._memoStore.dispatch(new DeleteMemoAction(memo));
  }
  
}
