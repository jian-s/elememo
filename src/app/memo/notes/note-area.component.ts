import { EditMemoAction } from './../../store/memo.action';
import { MemoModel } from 'app/model/memo.model';
import { AddMemoAction } from 'app/store/memo.action';
import { MemoState } from 'app/store/memo.state';
import { Store } from '@ngrx/store';
import { Component, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ele-note-area',
  templateUrl: './note-area.component.html'
})
export class NoteAreaComponent implements OnChanges {

  @Input() memo: MemoModel;
  @ViewChild('input') input: ElementRef;

  constructor(
    private _memoStore: Store<MemoState>
  ){}

  ngOnChanges() {
    if(this.memo) {
      this.input.nativeElement.value = this.memo.content;
    }
  }

  onAdd(input) {
    if(input.value.length > 0) {
      let new_memo: MemoModel = {
        id: this.memo ? this.memo.id : this.guid(),
        title: this.genTitle(input.value),
        content: this.genContent(input.value),
        date: new Date()
      }
      this.memo ? this._memoStore.dispatch(new EditMemoAction(new_memo)) : this._memoStore.dispatch(new AddMemoAction(new_memo));
      this.input.nativeElement.value = '';
    }
  }

  private guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  private genTitle(value: string) {
    value = value.trim();
    if(value.startsWith('\n')) {
      return this.genTitle(value.substring(1));
    }
    let lenDetect = value.length > 20 ? value.substring(0,20) + "..." : value;
    return lenDetect.includes('\n') ? lenDetect.substring(0, lenDetect.indexOf('\n')) : lenDetect;
  }

  private genContent(value: string) {
    value = value.trim();
    if(value.startsWith('\n')) {
      return this.genTitle(value.substring(1));
    }
    let lenDetect = value.length > 20 ? value.substring(0,20) + "..." : value;
    return lenDetect.includes('\n') ? lenDetect.substring(lenDetect.indexOf('\n')) : lenDetect;
  }
}
