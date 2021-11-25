import React, { useEffect, useState } from 'react'
import '../Main.scss'
import { Link } from 'react-router-dom';
import Label from '../label/Label';
import { MainLayout } from '../../components/layout/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux'
import Paginator from '../../components/Paginator/Paginator';
import MailIcon from '../../assets/image/icon/label.png'



export const Mail = (props: any) => {
   
    

    const onPageChanged = (pageNumber: number) => {
        //dispatch(requestMail(pageNumber,pageSize))
    }
    const [state,setState] = useState({
        isActiveLabel: false,
        mailId: null as null|number
    })
    

debugger
    return (<div className='mail'>
        
            {/* <Paginator onPageChanged={onPageChanged} /> */}
            <div className="initial-mail">
                
                <div className="initial-mail__content">
                    <ul className="initial-mail__content-list">

                        {props.data && props.data.map((item: any,idx:number) => {
                            return <li className="initial-mail__content-item">
                                <input type="checkbox" className="initial-mail__content-check" />
                                 {/* @ts-ignore */}
                                <img src={MailIcon} alt="MailIcon" className={state.mailId === idx ?"initial-mail__content-label--active":"initial-mail__content-label"} onClick={(e) =>{
                                    setState((s) => ({
                                        ...s,
                                        isActiveLabel: !state.isActiveLabel,
                                        mailId: idx
                                    }))
                                }} />
                                <Link to={'/mail/'+item.id} className="initial-mail__content-link">
                                    <h1 className="initial-mail__content-from">
                                        {item.mail && item.mail.sender.name}
                                        {item.receiver.name && item.receiver.name}
                                    </h1>
                                    <h1 className="initial-mail__content-title">
                                        {!!item.mail && item.mail.title}
                                        {item.title && item.title}
                                    </h1>
                                    <h1 className="initial-mail__content-data">
                                        {item.updated_at}
                                    </h1>
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        
    </div>)
}
