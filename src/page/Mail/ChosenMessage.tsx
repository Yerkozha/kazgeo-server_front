import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LayoutMail } from '../../components/layout/LayoutMail'
import { MainLayout } from '../../components/layout/MainLayout'
import { getSentMails } from '../../redux/mail-reducer'
import { AppStateType } from '../../redux/redux'
import { Mail } from './Mail'

type PropsType = {
    toggleModal: () => void
    isModal: boolean
}

export const ChosenMessage: React.FC<PropsType>  = (props) => {
    const dispatch = useDispatch()
    const data = useSelector((state: AppStateType) => state.mail.data)
    useEffect(() => {
        dispatch(getSentMails("?is_important=1"))
        
    }, [])

    return (<LayoutMail {...props}>
            <Mail data={data} />
    </LayoutMail>
    )
}
