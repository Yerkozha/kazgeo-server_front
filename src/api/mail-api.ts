import {instance, APIResponseType, configFormData, authHeader} from "./api";
import {config} from './api'
import { LabelResponceDataType } from "./label-api";

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
    description: any
    notify_me: number
    parent_id: null | number
    response_type: null | number
    sender: OwnerDataType
    updated_at: Array<string|number>
    created_at: Array<string|number>
}

export type MailResponceDataType = {
   id: number
   mail: MailDataType
   labels: Array<object>
   attachments: LabelResponceDataType
   is_opened: number
   is_important: number
   is_deleted: number
   send_as: null
   created_at: null
   updated_at: null
}
type MailSendDataType = {
    attachements: object[]
    created_at: string
    description: string
    id: number
    notify_me: string
    parent_id: number|null
    response_type: string|null
    sender: object
    title: string
    updated_at: string
}
type getMailDataType = {
    current_page: number
    data: Array<object>
    first_page_url: string
    from: number 
    last_page: number
    last_page_url: string
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: null|string
    to: number
    total:number
}

export const mailAPI = {
    getMail(sentMail?: string) {
        return instance.get<any>('v1/mails' + (sentMail ?? ''),config).then(res => res.data)
    },
    sendMail(files: any){
        return instance.post<APIResponseType<MailSendDataType>>(`v1/mails/send`,files,configFormData).then(res => res.data)
    },
    getMailById(mailId: string|number){
        return instance.get<APIResponseType<MailResponceDataType>>(`v1/mails/${mailId}`,config).then(res => res.data)
    },
    deleteMail(mailId: number){
        return instance.delete(`v1/mails/delete/${mailId}`,config)
    },
    
    getOpenedMails(mailId: number,data: object){
        return instance.put<APIResponseType<MailResponceDataType>>(`v1/mails/${mailId}`,data,config).then(res => res.data)
    }
}
