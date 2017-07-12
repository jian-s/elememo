import { slideStateTrigger, easeStateTrigger } from './../shared/animations';

import { DeleteMemoAction, LoadDataAction } from 'app/store/memo.action';
import { NoteAreaComponent } from './notes/note-area.component';
import { MemoModel } from 'app/model/memo.model';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { MemoState } from 'app/store/memo.state';
import { Component, Input, ViewChild, forwardRef, OnInit, trigger, state, style, transition, animate, HostBinding } from '@angular/core';
import { Memo } from "model/Memo";
import { Store } from "@ngrx/store";

@Component({
  selector: 'ele-memo-list',
  templateUrl: './memo-list.component.html',
  animations: [
    slideStateTrigger({startOpacity: 0, duration: '200ms'}),
    easeStateTrigger({duration: '300ms'}, {duration: '300ms'})
  ],
  host: {
    '[@slideState]': 'true',
    '[@easeState]': 'true'
  }
})
export class MemoListComponent implements OnInit {

  @ViewChild(NoteAreaComponent) noteComponent: NoteAreaComponent;
  memos: List<MemoModel> = List<MemoModel>([]);
  activedIndex: number;

  showButton: boolean = true;

  activedMemo: MemoModel;

  constructor(
    private _memoStore: Store<MemoState>
  ) {
    _memoStore.select('items').subscribe((data: List<MemoModel>) => {
      this.memos = data;
    });
  }

  ngOnInit() {
    console.log(localStorage.getItem('memos'))
    if(localStorage.getItem('memos')){
      this._memoStore.dispatch(new LoadDataAction(JSON.parse(localStorage.getItem('memos')), true));
    }
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
    this.activedMemo = Object.assign({}, memo);
  }

  onDelete(memo: MemoModel) {
    this._memoStore.dispatch(new DeleteMemoAction(memo));
  }

  onFocused(value: boolean) {
    value ? this.showButton = false : this.showButton = true;
  }
  
}
