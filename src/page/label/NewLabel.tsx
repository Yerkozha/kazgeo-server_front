/* eslint-disable no-restricted-globals */
import React, { useEffect, useState, Dispatch } from 'react'
import { InjectedFormProps, reduxForm, formValueSelector, Field, reset, DecoratedFormProps} from 'redux-form'
import { createField, GetStringKeys, Input, Select } from '../../components/common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/redux'
import './NewLabel.scss'
import { actions, addLabel, getLabels } from '../../redux/label-reducer'
import { MainLayout } from '../../components/layout/MainLayout'
import { LayoutMail } from '../../components/layout/LayoutMail'


const LabelForm: React.FC<any> = ({ handleSubmit, error, submitting }) => {

    const dispatch = useDispatch()
    const [currentColor,labels] = useSelector((state: AppStateType) => [state.label.currentColor,state.label.labels])
    const labelId = labels.map( (i: any) => i.id)
    const colors = ['red', 'green', 'blue']
    const [toggleColorDropDown, setToggleColorDropDown] = useState(false)

    const generateId = () => {
        return Math.floor(Math.random() * 100)
    }
    const addNewLabel = () => {
        if(labelId.include(generateId())){
            let id = Math.floor(Math.random() * 100)
            
        }

    }
    const deleteNewLabel = (id: any) => {

    }
    
    const onSelectCurrentLabel = (id: any) => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="label-layer">
                <div className="label__top">
                    <div className="label__top-container">
                        <h1 className="label__top-right">Ярлыки</h1>
                        <button className="label__top-btn" onClick={addNewLabel}>ДОБАВИТЬ ЯРЛЫК</button>
                    </div>
                    <h1 className="label__top-right">Параметры ярлыка</h1>
                </div>
                <div className="label-form">
                    <ul className="list">
                        {/* @ts-ignore */}
                        {labels && labels.map((label, idx) => {
                            return (<li className="list__item" key={idx} onClick={() => {
                                onSelectCurrentLabel(label.id)
                            }}>
                                <div className="list__container" >
                                    <div className="list__item-btn" />
                                    <h1 className="list__item-title">{label.name}</h1>
                                </div>
                                {/* @ts-ignore */}
                                <div className="list__item-close" onClick={() => deleteNewLabel(label.id)} />
                            </li>
                            )
                        })}
                    </ul>
                    <div className='create-label'>
                        {createField<LabelFormValuesTypeKeys>('Название', 'name', [required], Input)}
                        {createField<LabelFormValuesTypeKeys>(undefined, 'showOnMail', [], Input, { type: 'checkbox' }, 'Отображать сообщение в папке Входящие')}
                        {/* <Field name="favoriteColor" component="select">
                <option value="red"></option>
                <option value="green"></option>
                <option value="blue"></option>
            </Field> */}
                        {/* @ts-ignore */}
                        <div className="square" style={{ "background-color": currentColor }} onClick={() => setToggleColorDropDown(!toggleColorDropDown)} />
                        {toggleColorDropDown &&
                            <div className="square__box">
                                {/* @ts-ignore */}
                                {colors.map((item) => <div className="square" style={{ "background-color": item }} onClick={() => {
                                    setToggleColorDropDown(!toggleColorDropDown)
                                    dispatch(actions.setCurrentColor(item))
                                }} />)}</div>}
                        <div>
                            <button>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

// const selector = formValueSelector('selectingFormValues')

// const mapStateToProps = (state: AppStateType) => {
//     const colorValue = selector(state,"color")
//     return ({
//         colorValue
//     })
// }

//connect(mapStateToProps,{addLabel}),
interface YourForm {
    to: string
    copy: string
    hidden: string
    theme: string
    upload: HTMLInputElement
}
const handleOnFormChange = (newValues: YourForm,
    dispatch: Dispatch<any>,
    props: DecoratedFormProps<YourForm, {}, string>,
    previousValues: YourForm) => {

    // newValues.upload && dispatch(setFileMessage(newValues.upload.name))
    // if (props.values?.to) {
    //     let cancelReq
    //     //@ts-ignore
    //     clearTimeout(cancelReq)
    //     const searchUser = (email: string) => {
    //         dispatch(setFoundUserData(email))
    //     }
    //     cancelReq = setTimeout(() => { props.values && searchUser(props.values.to) }, 500)
    // }

}
// @ts-ignore
const afterSubmit = (result, dispatch) => {
    dispatch(reset('message'))
}

const LabelFormReduxForm: any = reduxForm({ form: 'selectingFormValues', onChange: handleOnFormChange, onSubmitSuccess: afterSubmit })(LabelForm)

export type LabelFormValuesType = {
    name: string
    showOnMail: boolean | number
}

type LabelFormValuesTypeKeys = GetStringKeys<LabelFormValuesType>

type NewLabelPropsType = {
    toggleModal: () => void
    isModal: boolean
    match: any
}

export const NewLabel: React.FC<NewLabelPropsType> = (props) => {

    const dispatch = useDispatch()
    const currentColor = useSelector((state: AppStateType) => state.label.currentColor)
    const labels = useSelector((state: AppStateType) => state.label.labels)
    //const idx = useSelector((state: AppStateType) => state.label.idx)

    const onSubmit = (formData: LabelFormValuesType) => {

        if (!!formData.showOnMail) {
            formData.showOnMail = 1
        } else {
            formData.showOnMail = 0
        }
        const data = [{ name: formData.name, display_message: formData.showOnMail, color: currentColor }]

        dispatch(addLabel(data))
    }

    useEffect(() => {
        dispatch(getLabels())
    }, [])

    return <LayoutMail match={props.match}>
            <LabelFormReduxForm onSubmit={onSubmit} />
        </LayoutMail>
}
