import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as fromOperations from '@operations/index';
import * as fromContactAction from './contact.actions';


export interface ContactState {
    entities: {[id:number]:fromOperations};
    loaded: boolean;
    loading: boolean;
    error:any;
}

export const contactAdapter = createEntityAdapter<ContactState>();

const initialContactState = contactAdapter.getInitialState({
    loaded: false,
    loading:false,
    error:null,
})




export const contactReducer = createReducer(
    initialContactState, 
    on(fromContactAction.contactActions.loadContactSuccess, (state,action) => {
           return contactAdapter.addMany(action.contacts,{
                                            ...state,
                                            loaded:true,
                                            loading:false
                                            });
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

export const { selectAll } = contactAdapter.getSelectors();