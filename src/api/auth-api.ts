import {instance, APIResponseType, config} from "./api";

type LoginResponseDataType = {
    id: number,
    name: string,
    lastname: string,
    roles: Array<number>,
    is_admin: number,
    api_token: string
}
 type AuthResponceDataType =  {
    id: number
    name: string
    phone: null|string|number
    email: string
    lastname: string
    initials: string
    trashed: boolean
    roles: Array<number>
    position_id: number
    position: object
    active: number
    cases: Array<number|object|string>
    employment_date: string
    experience: number
    vacation_days: number
    vacation_days_rest: Array<object>
    attachments: Array<number|object|string>
 }

export const authAPI = {
    login(email: string, password: string) {
        return instance.post<APIResponseType<LoginResponseDataType>>(`login`, {email, password}).then(res => res.data)
    },
    me(){
        return instance.get<any>(`users`,config).then(res => res.data)
    }
}
