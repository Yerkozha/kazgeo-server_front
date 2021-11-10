import { InferActionsTypes } from './redux'
import { labelAPI, LabelResponceDataType } from '../api/label-api'
import { message } from "antd";

let initialState = {
    labelId: null         as number | null|undefined,
    name: null            as string | null,
    display_message: null as number | null,
    color: null           as string | null,
    labels: []   as Array<LabelResponceDataType>,
    currentColor: null    as string | null,
    idx: 1             as number | null,
}

export const labelReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'DL/MAIL/ADD_LABEL':
            return {
                ...state,
                ...action.payload
            }
        case 'DL/MAIL/GET_LABELS':
            return {
                ...state,
                labels: [...action.labels]
            }
        case 'DL/MAIL/SET_CURREMT_LABEL_COLOR':
            return {
                ...state,
                currentColor: action.currentColor
            }
        case 'DL/MAIL/ADD_NEW_LABEL':
            return {
                ...state,
                labels: [...action.labels]
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
    addPostActionCreator: (labelId: number|undefined, name: string, display_message: number, color: string) => ({ type: 'DL/MAIL/ADD_LABEL', payload: {labelId, name, display_message, color } } as const),
    addGetLabelsActionCreator: (labels: Array<LabelResponceDataType>) => ({type: 'DL/MAIL/GET_LABELS',labels} as const),
    setCurrentColor: ( currentColor: string ) => ({type:'DL/MAIL/SET_CURREMT_LABEL_COLOR', currentColor} as const),
    addNewLabelOnClick: ( labels: Array<LabelResponceDataType> ) => ({ type: 'DL/MAIL/ADD_NEW_LABEL', labels} as const),
    onSelectLabel: ( idx: number ) => ({ type: 'DL/MAIL/ON_SELECT_LABEL', idx} as const)
}

export const addLabel = (name: string, display_message: number, color: string|null) => {
    return async (dispatch: any) => {
        const {data} = await labelAPI.createLabel(name, display_message, color)
        dispatch(actions.addPostActionCreator(data.labelId,data.name, data.display_message, data.color))
    }
}
export const updateLabel = ( labelId: number,name: string, color: string ) => {
    return async (dispatch: any) => {
        const {data} = await labelAPI.updateLabel(labelId,name,color)
        dispatch(actions.addPostActionCreator(data.labelId,data.name, data.display_message, data.color))
    }
}
export const getLabels = () => {
    return async (dispatch: any) => {
        const {data} = await labelAPI.getLabels()
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

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
