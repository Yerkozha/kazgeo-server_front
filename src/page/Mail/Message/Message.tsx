import React, { useEffect, useState } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { FieldFileInput,createField, GetStringKeys, Textarea, ckEditorRender, Input } from '../../../components/common/FormsControls/FormsControls'
import { MainLayout } from '../../../components/layout/MainLayout'
import { required } from '../../../utils/validators/validators'
import ReactHtmlParser from 'react-html-parser'
import { useDispatch } from 'react-redux'
import { sendMailGeneral } from '../../../redux/mail-reducer'


export const MessageForm: React.FC<InjectedFormProps<CreateFormValuesType>> = ({handleSubmit,error}) => {
    const [toggleMessageCopy, setToggleMessageCopy] = useState({
        message_copy: false,
        message_hidden: false,
        copy_btn_hidden:true,
        hidden_btn_hidden:true,
    })

    return (<div className="message">
        <div className="message__inner">
            <h1 className="message_title">
                Новое письмо
            </h1>
            <form className="message__form" onSubmit={handleSubmit}>
                <div className="message__form-to">
                    <h1 className="message__to-title">
                        Кому
                    </h1>
                    {createField<CreateMessageFormValuesTypeKeys>('To', 'to', [required], Textarea)}
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
                    <div className="message__form-to">
                        <h1 className="message__to-title">
                            Копия
                        </h1>
                        {createField<CreateMessageFormValuesTypeKeys>('Copy', 'copy', [required], Textarea)}
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
                        {createField<CreateMessageFormValuesTypeKeys>('Hidden', 'hidden', [required], Textarea)}
                    </div>
                }
                <div className="message__form-theme">
                    <h1 className="message__to-title">
                        Тема
                    </h1>
                    {createField<CreateMessageFormValuesTypeKeys>('Theme', 'theme', [required], Textarea)}
                </div>
                <Field type="file" name="upload" component={FieldFileInput} />
                <Field name="ckEditor" component={ckEditorRender} />
                <Field name="notify" component={Input} type='checkbox' />
                
                <button>Отправить</button>
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
    return (<MainLayout isModal={props.isModal} toggleModal={props.toggleModal} sendMail='ОТПРАВИТЬ' formData={formData}>
        <div className="message__presentation">
        <MessageReduxForm onSubmit={onSubmit} />
        </div>
    </MainLayout>)
}