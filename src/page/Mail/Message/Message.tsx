import React, { useEffect, useState } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { FieldFileInput,createField, GetStringKeys, Textarea, ckEditorRender, Input } from '../../../components/common/FormsControls/FormsControls'
import { MainLayout } from '../../../components/layout/MainLayout'
import { required } from '../../../utils/validators/validators'
import ReactHtmlParser from 'react-html-parser'
import { useDispatch, useSelector } from 'react-redux'
import { sendMailGeneral } from '../../../redux/mail-reducer'
import '../../Main.scss'
import MailIcon from '../../../assets/image/icon/send-mail.png'
import UserIcon from '../../../assets/image/icon/user_circle.png'
import Download from '../../../assets/image/icon/download.png'
import { Redirect } from 'react-router'
import { AppStateType } from '../../../redux/redux'

export const MessageForm: React.FC<InjectedFormProps<CreateFormValuesType>> = ({handleSubmit,error}) => {
    const [toggleMessageCopy, setToggleMessageCopy] = useState({
        message_copy: false,
        message_hidden: false,
        copy_btn_hidden:true,
        hidden_btn_hidden:true,
    })
    const isModal = useSelector((state: AppStateType) => state.app.isModal)

    return (<div className="message">
        <div className="message__inner">
            <h1 className="message__title">
                Новое письмо
            </h1>
            <form className="message__form" onSubmit={handleSubmit}>
                <div className={isModal ? "message__form-to" : "message__form-to" + ' ' + "message__form-to--modify"}>
                    <h1 className="message__to-title">
                        Кому:
                    </h1>
                    <div className="message__to-container">
                    {createField<CreateMessageFormValuesTypeKeys>('Выберите', 'to', [required], Input)}
                    <img src={MailIcon} alt="MailIcon" className="message__to-icon" />
                    <img src={UserIcon} alt="MailIcon" className="message__to-icon" />
                    </div>
                </div>
                {toggleMessageCopy.copy_btn_hidden && <button className="message__copy-btn" onClick={() => {
                    setToggleMessageCopy((s) => ({
                        ...s,
                        message_copy: true,
                        copy_btn_hidden: false
                    }))
                }}>
                    Добавить копию
                </button>}
                {toggleMessageCopy.message_copy &&
                    <div className={isModal ? "message__form-to" : "message__form-to" + ' ' + "message__form-to--modify"}>
                        <h1 className="message__to-title">
                            Копия
                        </h1>
                        {createField<CreateMessageFormValuesTypeKeys>('Copy', 'copy', [required], Input)}
                    </div>
                }
                {toggleMessageCopy.hidden_btn_hidden && <button className="message__copy-btn" onClick={() => {
                    setToggleMessageCopy((s) => ({
                        ...s,
                        message_hidden: true,
                        hidden_btn_hidden: false
                    }))
                }}>
                    Добавить скрытую копию
                </button>}
                {toggleMessageCopy.message_hidden &&
                    <div className="message__form-to">
                        <h1 className="message__to-title">
                            Скрытая
                        </h1>
                        {createField<CreateMessageFormValuesTypeKeys>('Hidden', 'hidden', [required], Input)}
                    </div>
                }
                <div className={isModal ? "message__form-theme" : "message__form-theme" + ' ' + "message__form-to--modify"}>
                    <h1 className="message__to-title">
                        Тема
                    </h1>
                    {createField<CreateMessageFormValuesTypeKeys>('Введите тему сообщения', 'theme', [required], Input)}
                </div>
                <label className="message__upload" htmlFor="upload__message">
                    Загрузить
                <Field type="file" name="upload" component={FieldFileInput} />
                
                </label>
                <Field name="ckEditor" component={ckEditorRender} />
                <div className="notify-read">
                <Field name="notify" component={Input} type='checkbox' />
                <p className="notify-read__text">Сообщить мне о прочтении письма</p>
                </div>
                <div className="message__bottom-btn">
                <button type="submit" className="message__send-btn" >ОТПРАВИТЬ</button>
                <button type="button" className="message__send-btn message__send-btn--delete" onClick={()=>{
                    debugger
                    <Redirect to={'/mail'} />
                }}>ОТМЕНА</button>
                </div>
            </form>
        </div>
    </div>
    )
}

const MessageReduxForm = reduxForm<CreateFormValuesType>({ form: 'message' })(MessageForm)

export type CreateFormValuesType = {
    to: string
    copy: string
    hidden: string
    theme: string
    upload: object
    notify: boolean
}

type CreateMessageFormValuesTypeKeys = GetStringKeys<CreateFormValuesType>
type NewLabelPropsType = {
    toggleModal: ()=> void
    isModal: boolean
}
export const Message:React.FC<NewLabelPropsType> = (props) => {

    const dispatch = useDispatch()

    const formData = new FormData()

    const onSubmit = (data:any) => {

        let notify: any = +data.notify

        formData.set("title", data.theme)
        formData.set("description", data.ckEditor)
        formData.set("notify_me", notify)
        formData.set("receiver_ids[0]", "1")
        formData.set("files[0]", data.upload)

        dispatch(sendMailGeneral(formData))

    }
    return (<MainLayout isModal={props.isModal} toggleModal={props.toggleModal} sendMail='ОТПРАВИТЬ' formData={formData} cancelMail='ОТМЕНИТЬ' >
        <div className="message__presentation">
        <MessageReduxForm onSubmit={onSubmit} />
        </div>
    </MainLayout>)
}