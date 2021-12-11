import React, { useEffect, useState } from 'react'
import '../Main.scss'
import { Link } from 'react-router-dom';
import Label from '../label/Label';
import { MainLayout } from '../../components/layout/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux'
import Paginator from '../../components/Paginator/Paginator';
import MailIcon from '../../assets/image/icon/label.png'
import { Tag } from 'antd';
import { LabelResponceDataType } from '../../api/label-api';



export const Mail = (props: any) => {
    
    const onPageChanged = (pageNumber: number) => {
        //dispatch(requestMail(pageNumber,pageSize))
    }
    const [state,setState] = useState({
        isActiveLabel: false,
        mailId: null as null|number
    })
    const selectedMails = ( value: any ) => {
        if(value.target.checked){
            return props.setMailIdAndClear(value.target.value)
        }
       
    }
    const filterMail = (item: any,url: string) => {
        debugger
        switch(url){
            case '/sent-messages':
                return item.receiver && item.receiver.name
            default:
                return item.mail.sender && item.mail.sender.name
        }
    }
    return (<div className='mail'>
        
            {/* <Paginator onPageChanged={onPageChanged} /> */}
            <div className="initial-mail">
                
                <div className="initial-mail__content">
                    <ul className="initial-mail__content-list">

                        {props.data && props.data.map((item: any,idx:number) => {
                            return <li className="initial-mail__content-item">
                                <input type="checkbox" id='selected_users_checkbox' className="initial-mail__content-check" value={item.id} onChange={selectedMails} />
                                 {/* @ts-ignore */}
                                <img src={MailIcon} alt="MailIcon" className={state.mailId === idx ?"initial-mail__content-label--active":"initial-mail__content-label"} onClick={(e) =>{
                                    setState((s) => ({
                                        ...s,
                                        isActiveLabel: !state.isActiveLabel,
                                        mailId: idx
                                    }))
                                }} />
                                <Link to={'/mail/'+item.id} className="initial-mail__content-link" onClick={() => props.getOpenedMails(item.id,{"status": "is_opened","value": 1})}>
                                    <h1 className="initial-mail__content-from">
                                        {filterMail(item,props.url)}
                                    </h1>
                                    <h1 className="initial-mail__content-title">
                                    {item.labels && item.labels.map((label: LabelResponceDataType) => <Tag color={label.color}>{label.name}</Tag>)}
                                    {item.mail && item.mail.title}
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
