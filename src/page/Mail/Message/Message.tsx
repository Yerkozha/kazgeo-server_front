import React, { useEffect, useState, Dispatch } from 'react'
import { Field, InjectedFormProps, reduxForm, DecoratedFormProps, reset } from 'redux-form'
import { FieldFileInput, createField, GetStringKeys, Textarea, ckEditorRender, Input } from '../../../components/common/FormsControls/FormsControls'
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
import { setFoundUserData } from '../../../redux/users-reducer'
import { LayoutMail } from '../../../components/layout/LayoutMail'

export const MessageForm: React.FC<InjectedFormProps<CreateFormValuesType>> = ({ handleSubmit, error }) => {
    const [toggleMessageCopy, setToggleMessageCopy] = useState({
        message_copy: false,
        message_hidden: false,
        copy_btn_hidden: true,
        hidden_btn_hidden: true,
    })
    const [foundUsers, setFoundUsers] = useState()
    const usersEmail: Array<string> = []
    const isModal = useSelector((state: AppStateType) => state.app.isModal)
    // const usersEmail = useSelector((state: AppStateType) => state.users.usersEmail)
    let typingEmail = useSelector((state: AppStateType) => state.users.typingEmail)
    const data = useSelector((state: AppStateType) => state.users.data)
    data && data.map((item: any) => {
        if(!item.deleted_at){
            usersEmail.push(item.email)
        }
    })
    const foundUsersName = usersEmail.filter(email => {
        return email.startsWith(typingEmail)
    })
    
    return (<div className="message">
        <div className="message__inner">
            <h1 className="message__title">
                Новое письмо
            </h1>
            <form className="message__form" onSubmit={handleSubmit}>
                <div className={isModal ? "message__form-to" : "message__form-to--modify"}>
                    <h1 className="message__to-title">
                        Кому:
                    </h1>
                    <div className="message__to-container">
                        {createField<CreateMessageFormValuesTypeKeys>('Выберите', 'to', [required], Input,{list: 'toId'})}
                        <datalist id="toId">
                            {foundUsersName.map( item => <option value={item} />)}
                        </datalist>
                        <img src={MailIcon} alt="MailIcon" className="message__to-icon" />
                        <img src={UserIcon} alt="MailIcon" className="message__to-icon" />
                    </div>
                    <ul className="message__users">
                    {/* {foundUsersName && foundUsersName.map( item => <li className='message__users-found'>{item}</li>)} */}
                    </ul>
                   
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
                    <div className={isModal ? "message__form-to" : "message__form-to--modify"}>
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
                    <div className={isModal ? "message__form-to" : "message__form-to--modify"}>
                        <h1 className="message__to-title">
                            Скрытая
                        </h1>
                        {createField<CreateMessageFormValuesTypeKeys>('Hidden', 'hidden', [required], Input)}
                    </div>
                }
                <div className={isModal ? "message__form-theme" : "message__form-to--modify"}>
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
                    <button type="button" className="message__send-btn message__send-btn--delete" onClick={() => {
                        <Redirect to={'/mail'} />
                    }}>ОТМЕНА</button>
                </div>
            </form>
        </div>
    </div>
    )
}
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
    if(props.values?.to){
        let cancelReq
        //@ts-ignore
        clearTimeout(cancelReq)
        const searchUser = (email: string) => {
            dispatch(setFoundUserData(email))
        }
        cancelReq = setTimeout(() => { props.values && searchUser(props.values.to) }, 500)
    }

}
// @ts-ignore
const afterSubmit = (result, dispatch) =>{
    dispatch(reset('message'))}
    
    // @ts-ignore
const MessageReduxForm = reduxForm<CreateFormValuesType>({ form: 'message', onChange: handleOnFormChange, onSubmitSuccess: afterSubmit })(MessageForm)

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
    toggleModal: () => void
    isModal: boolean
}
export const Message: React.FC<NewLabelPropsType> = (props) => {

    const dispatch = useDispatch()
    const data = useSelector((state: AppStateType) => state.users.data)
    const formData = new FormData()

    const onSubmit = (sendFormValues: any) => {
        const userId = data.find((user: any) => {
            return user.email === sendFormValues.to})
        let notify: any =  sendFormValues.notify ?? 0
        if(notify === false) notify = +notify
        else if(notify === true) notify = +notify
        formData.set("title", sendFormValues.theme)
        formData.set("description", sendFormValues.ckEditor)
        formData.set("notify_me", notify)
        formData.set("receiver_ids[0]", userId.id)
        formData.set("files[0]", sendFormValues.upload)

        dispatch(sendMailGeneral(formData))

    }
    return (<LayoutMail isModal={props.isModal} toggleModal={props.toggleModal} sendMail='ОТПРАВИТЬ' formData={formData} cancelMail='ОТМЕНИТЬ' >
        <div className="message__presentation">
            <MessageReduxForm onSubmit={onSubmit} />
        </div>
    </LayoutMail>)
}