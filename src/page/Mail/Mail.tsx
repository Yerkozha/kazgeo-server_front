import React, { useEffect, useState } from 'react'
import '../Main.scss'
import { Link } from 'react-router-dom';
import Label from '../label/Label';
import { MainLayout } from '../../components/layout/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux'
import Paginator from '../../components/Paginator/Paginator';



export const Mail = (props: any) => {
    const onPageChanged = (pageNumber: number) => {
        //dispatch(requestMail(pageNumber,pageSize))
    }
    const [state,setState] = useState({
        isActiveLabel: false
    })

    return (<div className='mail'>
        <MainLayout {...props}>
            {/* <Paginator onPageChanged={onPageChanged} /> */}
            <div className="initial-mail">
                <div className="initial-mail__container">
                    <div className="initial-mail__info">
                        <h1 className="initial-mail__title">От кого</h1>
                        <h1 className="initial-mail__title">Тема</h1>
                    </div>
                    <div className="initial-mail__data">
                        <h1 className="initial-mail__data-title">Дата</h1>
                    </div>
                </div>
                <div className="initial-mail__content">
                    <ul className="initial-mail__content-list">

                        {props.data && props.data.map((item: any) => {
                            return <li className="initial-mail__content-item">
                                <input type="checkbox" className="initial-mail__content-check" />
                                <span className={state.isActiveLabel?"initial-mail__content-label--active":"initial-mail__content-label"} onClick={() =>{
                                    setState((s) => ({
                                        ...s,
                                        isActiveLabel: !state.isActiveLabel}))
                                }} />
                                <a href="#" className="initial-mail__content-link">
                                    <h1 className="initial-mail__content-from">
                                        {item.mail.sender.name}
                                    </h1>
                                    <h1 className="initial-mail__content-title">
                                        {item.mail.title}
                                    </h1>
                                    <h1 className="initial-mail__content-data">
                                        {item.updated_at}
                                    </h1>
                                </a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </MainLayout>
    </div>)
}
