import {instance, APIResponseType,config} from "./api";

export type LabelResponceDataType = {
    id              : number
    name            : string,
    display_message : number,
    color           : string
    user_id         : number
    created_at      : string
    updated_at      : string
}

// type LabelUpdateDataType = {
//     id              : number
//     name            : string,
//     color           : string,
//     display_message : number
// }
// type LabelGetDataType = {
//     id              : number
//     name            : string,
//     color           : string,
//     display_message : number
// }

export const labelAPI = {
    createLabel(labels:any){
        return instance.post<APIResponseType<LabelResponceDataType>>('v1/labels',labels,config)
    },
    updateLabel(labelId: number,name: string, color: string){
        return instance.put<APIResponseType<any>>(`v1/labels/${labelId}`,{
            'name'  : name,
            'color' : color
        },config).then( res => res.data)
    },
    getLabels(){
        return instance.get<APIResponseType<Array<LabelResponceDataType>>>('v1/labels',config).then( res => res.data)
    },
    deleteLabel(labelId: number){
        return instance.delete(`v1/labels/${labelId}`)
    },

    attachLabel( labelTo: LabelTo ){
        return instance.post(`v1/mails/label`,labelTo,config).then( res => res.data)
    },
    detachLabel( mail_label_id: mail_label_id ){
      //  config.data = mail_label_id
        return instance.delete(`v1/mails/label?mail_id=${mail_label_id.mail_id}&label_id=${mail_label_id.label_id}`,config)
    }
}

export type LabelTo = {
    mail_ids: Array<number>
    label_id: number
}
export type mail_label_id = {
    mail_id: number
    label_id: number
}