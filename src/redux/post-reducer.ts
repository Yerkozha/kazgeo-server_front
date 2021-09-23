

import { postAPI } from '../api/api';
import { InferActionsTypes } from './redux';





let InitialState = {
    post: null as Array<object>|null|object,
}

type ActionType = InferActionsTypes<typeof actions>


export type InitialStateType = typeof InitialState
const postReducer = (state = InitialState,action: ActionType):InitialStateType => {
    
    switch(action.type){
        case "SET_POST":
            return {
                ...state,
                post: action.payload
            }
        default:
            return state;
    }
}

export const actions = {
    setPost: (arr: Array<object>)=>({
        type: "SET_POST" , payload: {arr}
    } as const)
}

export const getPost = () => async(dispatch:any)=>{
    const res = await postAPI.post()
    
    dispatch(actions.setPost(res))
}

export default postReducer