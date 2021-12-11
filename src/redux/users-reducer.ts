import { usersAPI } from "../api/users-api"
import { InferActionsTypes } from "./redux"




let initialState = {
    data: null as any,
    usersEmail: null as Array<string>|null,
    typingEmail: '' as string
}

export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type){
        case 'DL/USERS/SET_FOUND_USERS_DATA':
            return {
                ...state,
                data: action.data
            }
        case 'DL/USERS/SET_FOUND_USERS_EMAIL':
            return {
                ...state,
                usersEmail: action.usersEmail
            }
        case 'DL/USERS/SET_FOUND_USERS_TYPIED_EMAIL':
            return {
                ...state,
                typingEmail: action.typingEmail
            }
        default:
            return state
    }
}
export const actions = {
    setFoundUserData: (data: any) => ({type: 'DL/USERS/SET_FOUND_USERS_DATA', data} as const),
    setUsersEmail: (usersEmail: any) => ({type: 'DL/USERS/SET_FOUND_USERS_EMAIL', usersEmail} as const),
    setTypingEmail: (typingEmail: any) => ({type: 'DL/USERS/SET_FOUND_USERS_TYPIED_EMAIL', typingEmail} as const)
}
export const setFoundUserData = ( email: string) => async(dispatch: any) => {
    
    const {data} = await usersAPI.searchUser(email)
   
   
    dispatch(actions.setTypingEmail(email))
    dispatch(actions.setFoundUserData(data))
   // dispatch(actions.setUsersEmail(usersEmail))
}
export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>