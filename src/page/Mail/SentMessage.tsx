import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainLayout } from '../../components/layout/MainLayout'
import { getSentMails } from '../../redux/mail-reducer'
import { AppStateType } from '../../redux/redux'
import { Mail } from './Mail'

type PropsType = {
    toggleModal: () => void
    isModal: boolean
}

export const SentMessage: React.FC<PropsType>  = (props) => {
    const dispatch = useDispatch()
    const data = useSelector((state: AppStateType) => state.mail.data)
    useEffect(() => {
        dispatch(getSentMails('?sent_mails=1'))
        
    }, [])

    return (<MainLayout {...props}>
            <Mail data={data} />
    </MainLayout>
    )
}
