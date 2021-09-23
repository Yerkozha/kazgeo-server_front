import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunkMiddleware, {ThunkAction} from "redux-thunk";

import appReducer from "./app-reducer";
import postReducer from "./post-reducer";

let rootReducer = combineReducers({
  
    app: appReducer,
    post: postReducer
})

type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType

export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.__store__ = store

export default store
