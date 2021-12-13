import {stopSubmit} from "redux-form";
import {authAPI} from '../api/auth-api';
import {InferActionsTypes} from './redux';
import {Action} from 'redux';
import {FormAction} from 'redux-form/lib/actions';
import { config, configFormData } from "../api/api";


let initialState = {
    id: null as (number | null),
    name: null as string | null,
    lastname: null as string | null,
    roles: null as Array<number>|null,
    is_admin: null as number | null,

    phone: null as null|string|number,
    email: null as string|null,
    initials: null as string|null,
    trashed: null as null| boolean,
    position_id: null as null | number,
    active: null as null| number,
    cases: null as null|Array<number|object|string>,
    employment_date: null as null|string,
    experience: null as null|number,
    vacation_days: null as null|number,
    vacation_days_rest: null as null|Array<object>,
    attachments: null as null|Array<any>,
    
    isAuth: false
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'auth/SET_AUTH_USER_DATA':
            return {
                ...state,
                ...action.payload
            }
        case 'auth/SET_LOGIN_USER_DATA':
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const actions = {
    setLoginUserData: (id: number | null, name: string | null, lastname: string | null, roles: Array<number>,is_admin: number|null) => ({
        type: 'auth/SET_AUTH_USER_DATA', payload: {id, name, lastname, roles,is_admin}
    } as const),
    setAuthUserData: (id: number | null, name: string | null, phone:null|string|number, lastname: string | null,
        initials:string,trashed:boolean, roles: Array<number>,position_id: number|null,position:object,
        active:number,cases:Array<number|object|string>,employment_date:string,experience:number,vacation_days:number,vacation_days_rest:Array<object>,attachments:Array<any>) => ({
        type: 'auth/SET_LOGIN_USER_DATA', data: {id, name, phone, lastname,initials,trashed, roles,position_id,position,active,cases,employment_date,experience,vacation_days,vacation_days_rest,attachments}
    } as const),
}
export const login = (email: string, password: string) => async (dispatch:any) => {
    let {data} = await authAPI.login(email, password);
    config.headers.Authorization = `Bearer ${data.api_token}`
    configFormData.headers.Authorization = `Bearer ${data.api_token}`
    localStorage.setItem('api_token',data.api_token)

    dispatch(getAuthUserData())
    dispatch(actions.setLoginUserData(data.id,data.name,data.lastname,data.roles,data.is_admin))

    //dispatch(stopSubmit("login", {_error: "Error"}));
}
export const getAuthUserData = () => async (dispatch:any) => {
    let {data} = await authAPI.me()
    //dispatch(actions.setAuthUserData(data.id, data.name, data.phone, data.lastname,data.initials,data.trashed, data.roles,data.position_id,data.position,data.active,data.cases,data.employment_date,data.experience,data.vacation_days,data.vacation_days_rest,data.attachments))
}
export default authReducer;
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
