
import { getAuthUserData } from './auth-reducer';
import {InferActionsTypes} from './redux';

let initialState = {
    initialized: false,
    isModal: false
};

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'DL/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        case 'DL/APP/SET_MODAL':
            return {
                ...state,
                isModal: action.isModal
            }
        default:
            return state;
    }
}

export const actions = {
    initializedSuccess : () => ({type: 'DL/APP/INITIALIZED_SUCCESS'} as const),
    isModal            : ( isModal:boolean ) => ({type: 'DL/APP/SET_MODAL',isModal} as const)
}

export const toggleModal = (isModal:boolean) => (dispatch: any) =>
{
    dispatch(actions.isModal(isModal))
}

export const initializeApp = () => async (dispatch: any) => {
            localStorage.removeItem('api_token')
            dispatch(actions.initializedSuccess());
}


export default appReducer;
