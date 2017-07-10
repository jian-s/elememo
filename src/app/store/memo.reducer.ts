import { MemoModel } from 'app/model/memo.model';
import { List } from 'immutable';
import { ADD_MEMO_ACTION, EDIT_MEMO_ACTION, DeleteMemoAction, DELETE_MEMO_ACTION, AddMemoAction, EditMemoAction, CALLBACK_ACTION, CallbackAction, LOAD_DATA_ACTION, LoadDataAction } from './memo.action';
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

        case CALLBACK_ACTION:
            return handleCallbackAction(state, <CallbackAction>action);

        case LOAD_DATA_ACTION:
            return handleLoadDataAction(state, <LoadDataAction>action);

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

function handleLoadDataAction(state: MemoState, action: LoadDataAction) : MemoState {
    let newCollection = action.rewrite ? List<MemoModel>() : state.items
    
    action.payload.forEach((value) => {
        newCollection = newCollection.push(value);
    })

    console.log(action)
    return {
        items: newCollection
    };
}

function handleCallbackAction(state: MemoState, action: CallbackAction) : MemoState {
    console.log(action);
    if(action.status) {
        return state;
    }
    // Rollback error
    return state;
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