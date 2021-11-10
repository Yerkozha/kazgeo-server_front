import {instance, APIResponseType,config} from "./api";

export type LabelResponceDataType = {
    labelId?        : number|undefined
    name            : string,
    display_message : number,
    color           : string
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
    createLabel(name:string,display_message:number,color:string|null){
        return instance.post<APIResponseType<LabelResponceDataType>>('v1/labels',{
            'name'           : name,
            'display_message': display_message,
            'color'          : color
        },config).then( res => res.data)
    },
    updateLabel(labelId: number,name: string, color: string){
        return instance.put<APIResponseType<LabelResponceDataType>>(`v1/labels/${labelId}`,{
            'name'  : name,
            'color' : color
        },config).then( res => res.data)
    },
    getLabels(){
        return instance.get<APIResponseType<Array<LabelResponceDataType>>>('v1/labels',config).then( res => res.data)
    },
    deleteLabel(labelId: number){
        return instance.delete(`v1/labels/${labelId}`)
    }
}