/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react'
import { InjectedFormProps, reduxForm, formValueSelector, Field } from 'redux-form'
import { createField, GetStringKeys, Input, Select } from '../../components/common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/redux'
import './NewLabel.scss'
import { actions, addLabel, getLabels } from '../../redux/label-reducer'
import { MainLayout } from '../../components/layout/MainLayout'


const LabelForm: React.FC<any> = ({ handleSubmit, error, submitting }) => {

    const dispatch = useDispatch()
    const currentColor = useSelector((state: AppStateType) => state.label.currentColor)
    

    const colors = ['red', 'green', 'blue']
    const [toggleColorDropDown, setToggleColorDropDown] = useState(false)
    
    return (
        <form onSubmit={handleSubmit}>
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
                    {colors.map((item) => {
                        {/* @ts-ignore */ }
                        return <div className="square" style={{ "background-color": item }} onClick={() => {
                            setToggleColorDropDown(!toggleColorDropDown)
                            dispatch(actions.setCurrentColor(item))}} />
                    })}
                </div>}
            <div>
                <button>Сохранить</button>
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

const LabelFormReduxForm: any = reduxForm({ form: 'selectingFormValues' })(LabelForm)

export type LabelFormValuesType = {
    name: string
    showOnMail: boolean | number
}

type LabelFormValuesTypeKeys = GetStringKeys<LabelFormValuesType>

type NewLabelPropsType = {
    toggleModal: () => void
    isModal: boolean
}

export const NewLabel: React.FC<NewLabelPropsType> = (props) => {

    const dispatch = useDispatch()
    const currentColor = useSelector((state: AppStateType) => state.label.currentColor)
    const labels = useSelector((state: AppStateType) => state.label.labels)
    const idx = useSelector((state: AppStateType) => state.label.idx)
    
// @ts-ignore
   let fieldValue = labels.find((e,i) => {
        return idx === i ? e.name : ''
    })
    const addNewLabel = () => {
        labels.push({
            name: '',
            display_message: 0,
            color: ''
        })
        dispatch(actions.addNewLabelOnClick(labels))
    }
    const onSelectCurrentLabel = (idx: number) =>{
        dispatch(actions.onSelectLabel(idx))
    }
    const onSubmit = (formData: LabelFormValuesType) => {

        if (!!formData.showOnMail) {
            formData.showOnMail = 1
        } else {
            formData.showOnMail = 0
        }
        dispatch(addLabel(formData.name, formData.showOnMail, currentColor))
    }
    useEffect(() => {
        dispatch(getLabels())
    }, [])

    return <div>
        <MainLayout isModal={props.isModal} toggleModal={props.toggleModal}>
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
                        {labels && labels.map((label, idx) => {
                            return (<li className="list__item" key={idx}>
                                <div className="list__container" onClick={() => {
                                    console.log(idx,"idx")
                                    onSelectCurrentLabel(idx)}}>
                                    <div className="list__item-btn" />
                                    <h1 className="list__item-title">{label.name}</h1>
                                </div>
                                {/* @ts-ignore */}
                                <div className="list__item-close" />
                            </li>
                            )
                        })}
                    </ul>
                    
                    <LabelFormReduxForm onSubmit={onSubmit}  />
                </div>
            </div>
        </MainLayout>
    </div>
}
