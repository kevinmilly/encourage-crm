import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as fromOperations from '@operations/index';
import * as fromContactAction from './contact.actions';

export const contactFeatureKey = 'contact';

export interface ContactState extends EntityState<fromOperations.Contact> {
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const contactAdapter = createEntityAdapter<fromOperations.Contact>();

const initialContactState = contactAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: null,
})




export const contactReducer = createReducer(
    initialContactState,
    //load
    on(fromContactAction.contactActions.loadContactSuccess, (state, action) => {
        return contactAdapter.setAll(action.contacts, {
            ...state,
            loaded: true,
            loading: false
        });
    }),
    on(fromContactAction.contactActions.loadContactsFail, (state, action) => {
        return {
            ...state,
            loaded: true,
            loading: false,
            error: action.error
        }
    }),

    //add
    on(fromContactAction.contactActions.addContactSuccess, (state, action) => {
        return contactAdapter.addOne(action.contact, state)
    }),
    on(fromContactAction.contactActions.addContactFail, (state, action) => {
        return { ...state, error: action.error }
    }),

    //update
    // on(fromContactAction.contactActions.updateContactSuccess, (state,action) => {
    //     return contactAdapter.updateOne(action.contact,state)
    // }),
    // on(fromContactAction.contactActions.updateContactFail, (state,action) => {
    //     return {...state,error:action.error}
    // }),

    //delete
    // on(fromContactAction.contactActions.deleteContactSuccess, (state,action) => {
    //     return contactAdapter.removeOne(action.contact,state)
    // }),
    // on(fromContactAction.contactActions.deleteContactFail, (state,action) => {
    //     return {...state,error:action.error}
    // })
)

export const { selectAll } = contactAdapter.getSelectors();