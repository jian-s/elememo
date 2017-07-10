import { DeleteMemoAction, LoadDataAction } from 'app/store/memo.action';
import { NoteAreaComponent } from './notes/note-area.component';
import { MemoModel } from 'app/model/memo.model';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { MemoState } from 'app/store/memo.state';
import { Component, Input, ViewChild, forwardRef, OnInit } from '@angular/core';
import { Memo } from "model/Memo";
import { Store } from "@ngrx/store";

@Component({
  selector: 'ele-memo-list',
  templateUrl: './memo-list.component.html'
})
export class MemoListComponent implements OnInit {

  @ViewChild(NoteAreaComponent) noteComponent: NoteAreaComponent;
  memos: Observable<List<MemoModel>>;
  activedIndex: number;

  activedMemo: MemoModel;

  constructor(
    private _memoStore: Store<MemoState>
  ) {
    this.memos = _memoStore.select('items');
  }

  ngOnInit() {
    console.log(localStorage.getItem('memos'))
    localStorage.getItem('memos') ? this._memoStore.dispatch(new LoadDataAction(JSON.parse(localStorage.getItem('memos')), true)) : null;
  }

  onCreate() {
    this.noteComponent.onFocus();
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
