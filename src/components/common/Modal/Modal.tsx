import React, { useState } from 'react'
import './Modal'
import {ReactComponent as SetIcon} from '../../../assets/image/icon/settings.svg'

export function Modal(props:any) {
    return (
        <div className="modal">
            <ul className="modal__inner">
                {props.children}
            </ul>
        </div>
    )
}

export const ModalItem = (props:any) =>{
    let [open,setOpen] = useState(false)
    return (<li className="modal__item">
        <a href="#" className="modal__link" onClick={() => setOpen(!open)}>
        {props.icon}
        </a>
        {open && props.children}
        </li>)
}

export const DropDown = () =>{
    const DropDownItem = (props:any) =>{
        return (
            <a href="#" className="menu-item">
                <span className="icon-btn">
                    {props.leftIcon}
                </span>
                {props.children}
                <span className="icon-right">
                    {props.rightIcon}
                </span>
            </a>
        )
    }


    return <div className="drop-down">
        <DropDownItem>My Profile</DropDownItem>
        <DropDownItem leftIcon={<SetIcon />}
        rightIcon={<SetIcon />}
        >Settings</DropDownItem>
    </div>
}




