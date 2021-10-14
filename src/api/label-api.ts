import {instance, APIResponseType,config} from "./api";

type LabelResponceDataType = {
    name            : string,
    display_message : number,
    color           : string
}

export const labelAPI = {
    createLabel(name:string,display_message:number,color:string){
        debugger
        return instance.post<APIResponseType<LabelResponceDataType>>('v1/labels',{
            'name'           : name,
            'display_message': display_message,
            'color'          : color
        },config)
    }
}