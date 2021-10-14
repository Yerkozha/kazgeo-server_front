
import { mailAPI } from '../api/mail-api';
import { InferActionsTypes } from './redux';

let initialState = {
    id: null as null | number,
    mail: null as null | object,
    labels: null as null | Array<string>,
    attachments: null as null | Array<object>,
    is_opened: null as null|number,
    is_important: null as null | number,
    send_as: null,
    created_at: null,
    updated_at: null
};

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const mailReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'DL/MAIL/SET_MAIL':
            return {
                ...state,
            }
        default:
            return state;
    }
}

export const actions = {
    setMailData: (id:number,mail:object,labels:Array<string>,attachments:Array<object>,is_opened:number,is_important:number,send_as:any,created_at:any,updated_at:any) => ({ type: 'DL/APP/SET_MAIL', payload: {id,mail,labels,attachments,is_opened,is_important,send_as,created_at,updated_at}})
}

export const initializeMailData = () => async (dispatch: any) => {
    const {data} = await mailAPI.getMail()
    dispatch(actions.setMailData(data.id,data.mail,data.labels,data.attachments,data.is_opened,data.is_important,data.send_as,data.created_at,data.updated_at))

    // Promise.all([promise])
    //     .then(() => {
    //         dispatch(actions.initializedSuccess());
    //     });
}


export default mailReducer;
