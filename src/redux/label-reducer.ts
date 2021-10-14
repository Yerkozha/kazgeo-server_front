import {InferActionsTypes} from './redux'
import {labelAPI} from '../api/label-api'




let initialState = {
    labels: {
    name: null as string | null,
    display_message: null as number | null,
    color: null as string | null,
    }
}

export const labelReducer = (state = initialState, action:ActionsType ):InitialStateType => {
    switch(action.type){
        case 'MAIL/ADD_LABEL':
            return {
                ...state,
                labels : action.payload
            }
    }
}

const actions = {
    addPostActionCreator: (name:string,display_message:number,color:string) => ({type: 'MAIL/ADD_LABEL',payload:{name,display_message,color}}as const)
}

export const addLabel = (name:string,display_message:number,color:string) => {
    return async (dispatch:any) => {
        const res = await labelAPI.createLabel(name,display_message,color)
        dispatch(actions.addPostActionCreator(name,display_message,color))
    }
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>