
import { Action } from "@ngrx/store";
import { MemoModel } from 'app/model/memo.model';

export const LOAD_DATA_ACTION = 'load_data';
export const ADD_MEMO_ACTION = 'add_memo';
export const EDIT_MEMO_ACTION = 'edit_memo';
export const DELETE_MEMO_ACTION = 'delete_memo';
export const CALLBACK_ACTION = 'callback_action';

export class AddMemoAction implements Action  {
    readonly type = ADD_MEMO_ACTION;
    constructor(public payload: MemoModel) { }
}

export class EditMemoAction implements Action  {
    readonly type = EDIT_MEMO_ACTION;
    constructor(public payload: MemoModel) { }
}

export class DeleteMemoAction implements Action  {
    readonly type = DELETE_MEMO_ACTION;
    constructor(public payload: MemoModel) { }
}

export class LoadDataAction implements Action  {
    readonly type = LOAD_DATA_ACTION;
    constructor(public payload: MemoModel[], public rewrite: boolean) { }
}

export class CallbackAction implements Action  {
    readonly type = CALLBACK_ACTION;
    constructor(public payload: MemoModel, public action: string, public status: boolean) { }
}