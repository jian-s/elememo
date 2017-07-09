import { MemoModel } from 'app/model/memo.model';
import { List } from 'immutable';
import { ADD_MEMO_ACTION, EDIT_MEMO_ACTION, DeleteMemoAction, DELETE_MEMO_ACTION, AddMemoAction, EditMemoAction } from './memo.action';
import { Action } from '@ngrx/store';
import { MemoState, INITIAL_MEMO_STATE } from './memo.state';

export function memoReducer(state: MemoState = INITIAL_MEMO_STATE, action: Action) : MemoState {
    console.log(action.type)
    switch (action.type)  {
        case ADD_MEMO_ACTION:
            return handleAddMemoAction(state, <AddMemoAction>action);

        case EDIT_MEMO_ACTION:
            return handleEditMemoAction(state, <EditMemoAction>action);

        case DELETE_MEMO_ACTION:
            return handleDeleteMemoAction(state, <DeleteMemoAction>action);

        default:
            return state;
    }
}

function handleAddMemoAction(state: MemoState, action: AddMemoAction): MemoState {
    const newState = {
        items: state.items ? state.items.push(action.payload) : List<MemoModel>([action.payload])
    }
    return newState;
}

function handleEditMemoAction(state: MemoState, action: EditMemoAction): MemoState {
    let index = findMemoIndex(state, action.payload);
    const newState = {
        items: state.items.set(index, action.payload)
    }
    return newState;
}

function handleDeleteMemoAction(state: MemoState, action: DeleteMemoAction): MemoState {
    let index = findMemoIndex(state, action.payload);
    const newState = {
        items: state.items.remove(index)
    }
    return newState;
}


function findMemoIndex(state: MemoState, value: MemoModel): number {
    let index: number;
    state.items.forEach((memo: MemoModel, i: number) => {
        if(memo.id === value.id) {
            index = i;
            return false;
        }
    })
    if(typeof index === 'undefined') {
        throw new ReferenceError(`Target memo '${value.title}' not found ...`);
    }
    return index;
}