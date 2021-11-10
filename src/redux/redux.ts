import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import mailReducer from "./mail-reducer";
import {labelReducer} from "./label-reducer";

let rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    mail: mailReducer,
    label: labelReducer,
    form: formReducer
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
