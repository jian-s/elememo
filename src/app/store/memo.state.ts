
import { List } from "immutable";
import { MemoModel } from 'app/model/memo.model';

export interface MemoState {
    items: List<MemoModel>
}

export const INITIAL_MEMO_STATE: MemoState = {
    items: List<MemoModel>([])
};
