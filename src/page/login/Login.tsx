import React from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, GetStringKeys, Input} from '../../components/common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { login } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux'
import style from './Login.module.css'




const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType> >
    = ({handleSubmit, error}) => {
    return (<form onSubmit={handleSubmit} className={style.form}>
        <div className={style.inner}>
        <h1 className={style.title}>Авторизация</h1>
            {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input)}
            {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, {type: 'password'})}
            <div>
                <button>Войти</button>
            </div>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType>({form: 'login'})(LoginForm)

export type LoginFormValuesType = {
    rememberMe: boolean
    password: string
    email: string
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const LoginPage: React.FC = () => {
    const id = useSelector((state:AppStateType) => state.auth.id)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        
        dispatch(login(formData.email, formData.password))
    }

    if (!!id) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
