import { Component, Input } from '@angular/core';
import { Memo } from "model/Memo";

@Component({
  selector: 'ele-notes',
  templateUrl: './notes.component.html'
})
export class NotesComponent {

  @Input() memos: Array<Memo>;
  
}
