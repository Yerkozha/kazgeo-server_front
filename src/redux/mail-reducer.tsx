import { mailAPI } from '../api/mail-api';
import { InferActionsTypes } from './redux';
import { message } from "antd";

let initialState = {
    mailId: null as null | number,
    mail: null as null | object,
    labels: null as null | Array<string>,
    attachments: null as null | Array<object>,
    is_opened: null as null | number,
    is_important: null as null | number,
    send_as: null,
    created_at: null as string | null,
    updated_at: null as null|string,

    pageNumber: 1 as number,
    pageSize: 10 as number,
    attachements:null as object[]|null,
    description:null as null|string,
    notify_me:null as null| string,
    parent_id:null as null| number,
    response_type:null as null| string,
    sender:null as null| object,
    title: null as null|string,
    data: [] as null|object[],
    uniqueMailData: null as any,

    selectedMailId: [] as any,

    total: null as number|null,
    file: null as any
};



const mailReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'DL/MAILS/SET_MAIL':
            return {
                ...state,
                ...action.payload
            }
        case 'DL/MAILS/SET_CURRENT_PAGE':
            return {
                ...state,
                pageNumber: action.pageNumber
            }
        case 'DL/MAILS/SET_SENT_MAIL':
            return {
                ...state,
                attachements:action.attachements,created_at:action.created_at,description:action.description,mailId:action.mailId,notify_me:action.notify_me,parent_id:action.parent_id,response_type:action.response_type,sender:action.sender,title:action.title,updated_at:action.updated_at
            }
        case 'DL/MAILS/GET_ALL_MAIL':
            return {
                ...state,
                data: action.data
            }
        case 'DL/MAILS/SET_UNIQUE_MAIL':
            return {
                ...state,
                uniqueMailData: action.uniqueMailData
            }
        case 'DL/MAILS/SELECTED_MAIL_ID':
            return {
            ...state,
            selectedMailId: [...state.selectedMailId,action.selectedMailId]
            }
        case 'DL/MAILS/CLEAR_SELECTED_MAIL_ID':
            return {
                ...state,
                selectedMailId: []
            }
        case 'DL/MAILS/SELECTED_ALL_MAIL_ID':
            return {
                ...state,
                selectedMailId: action.setAllMailId
            }
        case 'DL/MAILS/SET_TOTAL_MAILS_COUNT':
            return {
                ...state,
                total: action.total
            }
        default:
            return state;
    }
}

export const actions = {
    setTotalCountMail: ( total: number ) => ({type: 'DL/MAILS/SET_TOTAL_MAILS_COUNT', total} as const),
    setMailData: (id: number, mail: object, labels: Array<string>, attachments: Array<object>, is_opened: number, is_important: number,
        send_as: any, created_at: any, updated_at: any) => ({
            type: 'DL/MAILS/SET_MAIL', payload: {
                id, mail, labels, attachments, is_opened, is_important, send_as, created_at, updated_at
            }
        } as const),
    setCurrentPage: (pageNumber: number) => ({ type: 'DL/MAILS/SET_CURRENT_PAGE', pageNumber } as const),
    setSentMailData: (attachements: object[],created_at: string,description: string,mailId: number,notify_me: string,parent_id: number|null,
        response_type: string|null,sender: object,title: string,updated_at: string) => ({type: 'DL/MAILS/SET_SENT_MAIL',attachements,created_at,description,mailId,notify_me,parent_id,response_type,sender,title,updated_at} as const),
    setGetAllMailResponce: ( data: object[] ) => ({type: 'DL/MAILS/GET_ALL_MAIL',data} as const),
    setUniqueMailData: ( uniqueMailData: object ) => ({type: 'DL/MAILS/SET_UNIQUE_MAIL',uniqueMailData} as const),
    setMailId: ( selectedMailId: string ) => ({type: 'DL/MAILS/SELECTED_MAIL_ID',selectedMailId} as const ),
    setAllMailId: ( setAllMailId: any ) => ({type: 'DL/MAILS/SELECTED_ALL_MAIL_ID',setAllMailId} as const ),
    clearSelectedMailId: ( ) => ({type: 'DL/MAILS/CLEAR_SELECTED_MAIL_ID'} as const ),

    setMessageFile: (file: any) => ({type: 'DL/MAILS/MESSAGE/FILE_DATA', file} as const)
}

// export const initializeMailData = () => async (dispatch: any) => {
//     const { data } = await mailAPI.getMail()
//     dispatch(actions.setMailData(data.id, data.mail, data.labels, data.attachments, data.is_opened,
//         data.is_important, data.send_as, data.created_at, data.updated_at))

//     // Promise.all([promise])
//     //     .then(() => {
//     //         dispatch(actions.initializedSuccess());
//     //     });
// }

export const getAllMail = () => async (dispatch: any) => {
   // dispatch(actions.setCurrentPage(pageNumber))
   //    debugger
    const data = await mailAPI.getMail('?perPage=10')
    debugger
    dispatch(actions.setTotalCountMail(data.total))
    dispatch(actions.setGetAllMailResponce(data.data))
}

export const getSentMails = (url: string) => async (dispatch: any) => {
    const data = await mailAPI.getMail(url)
    if('?is_important=1' === url || '?is_deleted=1&perPage=10' === url){
        dispatch(actions.setGetAllMailResponce(data.data))
    }
    else{
        dispatch(actions.setGetAllMailResponce(data.mails.data))
    }
}

export const sendMailGeneral = (files: any) => async (dispatch: any) => {
    try{
        const {data} = await mailAPI.sendMail(files)
        if( data ){
        message.success('Сообщение отправлено')
        dispatch(actions.setSentMailData(data.attachements,data.created_at,data.description,data.id,data.notify_me,data.parent_id,data.response_type,data.sender,data.title,data.updated_at))
    }
    }
    catch{
        message.error("Что-то пошло не так, пожалуйста повторите попытку позже")
    }
    
}

export const getMailById = ( mailId: number ) => async (dispatch: any) =>{
    const {data} = await mailAPI.getMailById(mailId)
    dispatch(actions.setUniqueMailData(data))
}

export const deleteMail = ( mailId: number ) => (dispatch: any) =>{
    try{
    return mailAPI.deleteMail(mailId).then(()=>{
        message.success('Сообщение успешно удалено')
        dispatch(getAllMail())
        
    }).catch((error)=>{
        message.error("Что-то пошло не так, пожалуйста повторите попытку позже")
    })
    }
    catch{
        message.error("Что-то пошло не так, пожалуйста повторите попытку позже")
    }
}

export const getOpenedMails = ( mailId: number, openedMailData: object ) => (dispatch: any) => {
    return mailAPI.getOpenedMails(mailId,openedMailData)
}

export const setMailIdAndClear = (maild: string,clearSelectedUsers?: any,setAllMails?: Array<any>) => (dispatch: any) => {
    maild && dispatch( actions.setMailId( maild ))
    clearSelectedUsers && dispatch(actions.clearSelectedMailId())
    setAllMails && dispatch(actions.setAllMailId(setAllMails))
}
export const setFileMessage = (file: any) => (dispatch: any) => {
    dispatch(actions.setMessageFile(file))
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

export default mailReducer;
