import { createReducer, on } from '@ngrx/store';
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

export const contactReducer = createReducer(
    initialState, 
    on(fromContactAction.loadContacts, (state,action) => {
        return {
            ...state, 
            loading: true 
            }
    }),
    on(fromContactAction.loadContactSuccess, (state,action) => {
            return {
                ...state,
                loaded:true,
                loading:false
            }
    }),
    on(fromContactAction.loadContactsFail, (state,action) => {
        return {
            ...state,
            loaded:true,
            loading:false
        }
    })
    
)

