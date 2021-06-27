import * as fromOperations from '@operations/index';
import * as fromContactAction from '../actions';

export interface ContactState {
    contacts: fromOperations.Contact[];
    loaded: boolean;
    loading: boolean;
}

const initialState:ContactState = {
    contacts:[],
    loaded: false,
    loading:false
}


export function contactReducer(
        state=initialState, 
        action:fromContactAction.ContactActionsUnion
    ): ContactState {
                    
        switch (action.type) {
            case fromContactAction.ContactActionTypes.LOAD_CONTACTS_SUCCESS:
                return ({
                        ...initialState, 
                        ...action.payload
                        });
            default:
                return state;
        }
    }

