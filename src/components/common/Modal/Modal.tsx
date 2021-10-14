import React, { useState } from 'react'
import './Modal.scss'
import {ReactComponent as SetIcon} from '../../../assets/image/icon/settings.svg'
import {ReactComponent as ShowIcon} from '../../../assets/image/icon/show.svg'
import { transform } from 'typescript'

export function Modal(props:any) {
    return (
        <div className="modal">
            <ul className="modal__inner">
            <ModalItem open={props.open}>
            <DropDown drop={props.drop} />
            </ModalItem>
            </ul>
        </div>
    )
}

export const ModalItem = (props:any) =>{
    
    return (<li className="modal__item">
        <a href="#" className="modal__link" >
        <div className="arrow_down"></div>
        </a>
        {props.open && props.children}
        </li>)
}

export const DropDown = (props:any) =>{

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


    return <div className={`drop-down ${props.drop}`}>
        <DropDownItem>My Profile</DropDownItem>
        <DropDownItem leftIcon={<SetIcon />}
        rightIcon={<ShowIcon />}
        >Settings</DropDownItem>
    </div>
}




