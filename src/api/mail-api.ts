import {instance, APIResponseType} from "./api";
import {config} from './api'

type PositionDataType =  {
    id: number
    name: string
    name_to: string
    name_from: string
    name_by: string
    name_kz: string
    name_to_kz: string
    name_from_kz: string
    name_by_kz: string
    department_id: number
    is_head: null
    deleted_at: null
    created_at: null
    updated_at: string
}
type OwnerDataType ={
    id: number
    name: string
    phone: null|string|number
    email: string
    lastname: string
    initials: string
    trashed: boolean
    roles: Array<number>
    position_id: number
    position: PositionDataType
    active: number
    cases: null|Array<string|number>
    employment_date: string
    experience: number
    vacation_days: number
    vacation_days_rest: Array<string|number>
    attachments: Array<string|number>
}
type MailDataType = {
    id: number
    title: string
    description: string
    notify_me: number
    parent_id: null | number
    response_type: null | number
    sender: OwnerDataType
    updated_at: Array<string|number>
    created_at: Array<string|number>
}
type MailResponceDataType = {
   id: number
   mail: MailDataType
   labels: Array<string>
   attachments: Array<object>
   is_opened: number
   is_important: number
   send_as: null
   created_at: null
   updated_at: null
}

export const mailAPI = {
    
    getMail() {
        return instance.get<APIResponseType<MailResponceDataType>>(`v1/mails`,config).then(res => res.data)
    }
    
}