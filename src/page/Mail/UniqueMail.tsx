import React, { useState } from 'react'
import { MailResponceDataType } from '../../api/mail-api'
import '../Main.scss'
import ReactHtmlParser from 'react-html-parser'
import { AppStateType } from '../../redux/redux'

import Arrow from '../../assets/image/icon/caret_down.png'
import { useSelector } from 'react-redux'

type UniqueMailPropsType = {
    uniqueMailData: MailResponceDataType
    deleteMail: (mailId: number) => void
}


export const UniqueMail: React.FC<UniqueMailPropsType> = (props) => {
    let description
    props.uniqueMailData?.mail.description === 'undefined' ? description = '' : description = props.uniqueMailData?.mail.description
    const [showContent, setShowContent] = useState({
        content: true,
        popup: false
    })
    const ownerName = useSelector((state: AppStateType) => state.auth.name)
    const ownerLastname = useSelector((state: AppStateType) => state.auth.lastname)

    return (<div className='unique-mail'>
        <div className="unique-mail__inner">
            <div className="unique-mail__title">
                <h1 className="unique-mail__title-content">
                    {props.uniqueMailData?.mail.title}
                </h1>
            </div>
            <button className="unique-mail__from" onClick={() => setShowContent((s) => ({
                ...s,
                content: !showContent.content
            }))}>
                <div className="unique-mail__from-inner">
                    <h1 className="unique-mail__from-name">
                        {props.uniqueMailData?.mail.sender.email}
                    </h1>
                    <button className="unique-mail__from-popup" onClick={() => setShowContent((s) => ({
                        ...s,
                        popup: !showContent.popup
                    }))}>
                        <img src={Arrow} alt="Arrow" />

                    </button>
                    {showContent.popup &&
                        <ul className="unique-mail__modal">
                            <li className="unique-mail__modal-from">
                                <h1>От:</h1>
                                <p className="unique-mail__modal-paragraph">{props.uniqueMailData && props.uniqueMailData.mail.sender.email}</p>
                            </li>
                            <li className="unique-mail__modal-from">
                                <h1>Кому:</h1>
                                <p>{`${ownerLastname} ${ownerName}`}</p>
                            </li>
                            <li className="unique-mail__modal-from">
                                <h1>Дата:</h1>
                                <p className="unique-mail__modal-paragraph">{props.uniqueMailData && props.uniqueMailData.mail.updated_at}</p>
                            </li>
                            <li className="unique-mail__modal-from">
                                <h1>Тема:</h1>
                                <p className="unique-mail__modal-paragraph">{props.uniqueMailData && props.uniqueMailData.mail.title}</p>
                            </li>
                        </ul>}
                </div>
                <div className="unique-mail__from-data">{props.uniqueMailData && props.uniqueMailData.updated_at}</div>
            </button>
            {showContent.content &&
                <h1 className="unique-mail__content">
                    {ReactHtmlParser(description)}
                </h1>}
        </div>
        <div className="unique-mail__options">
            <ul className="unique-mail__options-main">
                <li className="unique-mail__options-item">
                    <button className="unique-mail__options-btn">ОТВЕТИТЬ</button>
                </li>
                <li className="unique-mail__options-item">
                    <button className="unique-mail__options-btn">ОТВЕТИТЬ ВСЕМ</button>
                </li>
                <li className="unique-mail__options-item">
                    <button className="unique-mail__options-btn">ПЕРЕСЛАТЬ</button>
                </li>
                <li className="unique-mail__options-item">
                    <button className="unique-mail__options-btn">СОЗДАТЬ ДОКУМЕНТ</button>
                </li>
                <li className="unique-mail__options-item">
                    <button className="unique-mail__options-btn">СОЗДАТЬ СОБЫТИЕ</button>
                </li>
            </ul>
            <button className="unique-mail__options-delete" onClick={() => props.deleteMail(props.uniqueMailData.id)}>
                УДАЛИТЬ
            </button>
        </div>
    </div>
    )
}
