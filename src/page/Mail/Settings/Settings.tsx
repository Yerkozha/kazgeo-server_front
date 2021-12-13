import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, GetStringKeys, Input } from '../../../components/common/FormsControls/FormsControls'
import { MainLayout } from '../../../components/layout/MainLayout'
import Close from '../../../assets/image/icon/close_small.png'
import { required } from '../../../utils/validators/validators'
import { LayoutMail } from '../../../components/layout/LayoutMail'

const SettingsForm: React.FC<InjectedFormProps<CreateFormValuesType>> = ({ handleSubmit, error }) => {
    return (<form className="settings__form" onSubmit={handleSubmit}>
        <div className="settings__form-inner">
            <div className="settings__filters">
                <div className="settings__add-filter">
                    <h1 className="settings__title">Фильтры</h1>
                    <button className="settings__btn">Добавить фильтр</button>
                </div>
                <ul className="settings__list">
                    <li className="settings__list-item">
                        <h1 className="settings__list-title">Новый фильтр</h1>
                        <img src={Close} alt="Close Button" className="settings__list-btn" />
                    </li>
                </ul>
            </div>
            <div className="settings__params">
                <h1 className="settings__title">Параметры ярлыка</h1>
                <h1 className="message__to-title">От кого [?]</h1>
                {createField<CreateMessageFormValuesTypeKeys>('Введите название', 'filterName', [required], Input)}
                <h1 className="message__to-title">Кому [?]</h1>
                {createField<CreateMessageFormValuesTypeKeys>('Введите название', 'filterName', [required], Input)}
                <h1 className="message__to-title">Слово в теме</h1>
                {createField<CreateMessageFormValuesTypeKeys>('Введите название', 'filterName', [required], Input)}
                <h1 className="message__to-title">Содержит слово</h1>
                {createField<CreateMessageFormValuesTypeKeys>('Введите название', 'filterName', [required], Input)}
                <div className="settings__params-checkbox">
                    <input type="checkbox" className="initial-mail__content-check" />
                    <h1 className="message__to-title">Есть вложения</h1>
                </div>
                <h1 className="message__to-title">Пометить ярлыком</h1>
            </div>
        </div>
        <h1 className="settings__warning">ВНИМАНИЕ: Ярлыки и изменения будут применены только для вновь поступивших сообщений</h1>
        <button className="settings__btn-save message__send-btn">СОХРАНИТЬ</button>
        <button className="settings__btn-cancel message__send-btn">ОТМЕНИТЬ</button>
    </form>)
}


type SettingsPropsType = {
    toggleModal: () => void
    isModal: boolean
}

const SettingsReduxForm = reduxForm<CreateFormValuesType>({ form: 'settings' })(SettingsForm)

type CreateFormValuesType = {
    filterName: string
    copy: string
    hidden: string
    theme: string
    upload: object
    notify: boolean
}

type CreateMessageFormValuesTypeKeys = GetStringKeys<CreateFormValuesType>

export const Settings: React.FC<SettingsPropsType> = (props) => {
    const onSubmit = (data: any) => {
        
    }
    return (<div className='settings'>
        <LayoutMail isModal={props.isModal} toggleModal={props.toggleModal}>
            <SettingsReduxForm onSubmit={onSubmit} />
        </LayoutMail>
    </div>
    )
}

