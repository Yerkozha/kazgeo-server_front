import { InferActionsTypes } from './redux'
import { labelAPI, LabelResponceDataType, LabelTo, mail_label_id } from '../api/label-api'
import { message } from "antd";
import { instance } from '../api/api';
import { getAllMail, setMailIdAndClear } from './mail-reducer';

let initialState = {
    id: null              as number|null,
    name: null            as string | null,
    display_message: null as number | null,
    color: null           as string | null,
    labels: []            as any,
    labelsAfterCreate: [] as Array<LabelResponceDataType>,
    currentColor: null    as string | null,
    idx: 1                as number | null,
}

export const labelReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'DL/MAIL/ADD_LABEL':
            return {
                ...state,
                labelsAfterCreate: action.labelsAfterCreate
            }
        case 'DL/MAIL/UPDATED_LABEL':
            return {
                ...state,
                ...action.payload
            }
        case 'DL/MAIL/GET_LABELS':
            return {
                ...state,
                labels: action.labels
            }
        case 'DL/MAIL/SET_CURREMT_LABEL_COLOR':
            return {
                ...state,
                currentColor: action.currentColor
            }
        case 'DL/MAIL/ADD_NEW_LABEL':
            return {
                ...state,
                labels: [...state.labels,...action.labels]
            }
        case 'DL/MAIL/ON_SELECT_LABEL':
            return {
                ...state,
                idx: action.idx
            }
        default:
            return state;
    }
}

export const actions = {
    addPostActionCreator: ( labelsAfterCreate: Array<LabelResponceDataType> ) => ({ type: 'DL/MAIL/ADD_LABEL', labelsAfterCreate } as const),
    setUpdatedData: ( payload: any ) => ({ type: 'DL/MAIL/UPDATED_LABEL', payload } as const),
    addGetLabelsActionCreator: (labels: Array<LabelResponceDataType>) => ({type: 'DL/MAIL/GET_LABELS',labels} as const),
    setCurrentColor: ( currentColor: string ) => ({type:'DL/MAIL/SET_CURREMT_LABEL_COLOR', currentColor} as const),
    addNewLabelOnClick: ( labels: Array<LabelResponceDataType> ) => ({ type: 'DL/MAIL/ADD_NEW_LABEL', labels} as const),
    onSelectLabel: ( idx: number ) => ({ type: 'DL/MAIL/ON_SELECT_LABEL', idx} as const)
}

export const addLabel = (labels:any) => {
    return async (dispatch: any) => {
        const data = await labelAPI.createLabel(labels)
        //@ts-ignore
        dispatch(actions.addPostActionCreator(data))
    }
}
export const updateLabel = ( labelId: number,name: string, color: string ) => {
    return async (dispatch: any) => {
        const {data} = await labelAPI.updateLabel(labelId,name,color)
        debugger
        dispatch(actions.setUpdatedData({id: data.id, name: data.name, color: data.color, display_message: data.display_message}))
    }
}
export const getLabels = () => {
    return async (dispatch: any) => {
        const {data} = await labelAPI.getLabels()
        debugger
        dispatch(actions.addGetLabelsActionCreator(data))
    }
}
export const deleteLabel = (labelId: number) => {
    return (dispatch: any) => {
        labelAPI.deleteLabel(labelId).then((res) => {
            message.success('Ярлык успешно удален')
        }).catch(()=>{
            message.error('Что-то пошло не так, пожалуйста попробуйте позднее')
        })
    }
}

export const attachLabel = ( labelTo: LabelTo ) => ( dispatch: any ) => {
    labelAPI.attachLabel(labelTo).then(res =>{ 
        dispatch(getAllMail())
        dispatch(setMailIdAndClear('1','Delete'))
        message.success(res.message)
      
        const len = document.querySelectorAll("[id='selected_users_checkbox']");
        for(let i = 0; i < len.length; i++){
              //@ts-ignore
            len[i].checked = false
        }
        //@ts-ignore
        document.getElementById('search__label-checkbox').checked = false
        
    })
}
export const detachLabel = ( mail_label_id: mail_label_id) => ( dispatch: any ) => {
    labelAPI.detachLabel(mail_label_id)
}


export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
