import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as fromOperations from '@operations/index';
import * as fromContactAction from '../../../store/actions';
import * as fromNoteAction from '../../../store/actions';

export interface ContactState {
    entities: {[id:number]:fromOperations.Contact};
    loaded: boolean;
    loading: boolean;
    error:any;
}

export const contactAdapter = createEntityAdapter<ContactState>();

const initialContactState:ContactState = {
    entities:{},
    loaded: false,
    loading:false,
    error:null,
}



export const contactReducer = createReducer(
    initialContactState, 
    on(fromContactAction.contactActions.loadContacts, (state,action) => {
        return {
            ...state, 
            loading: true 
            }
    }),
    on(fromContactAction.contactActions.loadContactSuccess, (state,action) => {
            return {
                ...state,
                loaded:true,
                loading:false,
                ...action.contacts
            } 
    }),
    on(fromContactAction.contactActions.loadContactsFail, (state,action) => {
        return {
            ...state,
            loaded:true,
            loading:false,
            error: action.error
        }
    })
    
)

