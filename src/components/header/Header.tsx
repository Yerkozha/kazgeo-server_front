import React, { useState } from 'react'
import './Header.scss'
import Notify from '../../assets/image/icon/notify.svg'
import settings from '../../assets/image/icon/settings.svg'
import show from '../../assets/image/icon/show.svg'
import { Modal } from '../common/Modal/Modal'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../redux/redux'
import { Menu, Dropdown } from 'antd'
import { ReferencesDropdown } from './ReferencesDropdown'
export const Header = (props: any) => {
    let [open, setOpen] = useState(false)
    
    return (<div className='header'>
            <div className="container">
                <div className="header__inner">
                    <div className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-item"><Link to="/mail" className="header__menu-link" onClick={() => {
                                props.toggleModal(true)
                            }}>Почта</Link></li>
                            <li className="header__menu-item"><Link to="/my-document" className="header__menu-link">Мои документы</Link></li>
                            <li className="header__menu-item"><ReferencesDropdown /></li>
                            <li className="header__menu-item"><Link to="/document-flow" className="header__menu-link">Документооборот</Link></li>
                            <li className="header__menu-item"><Link to="/library" className="header__menu-link">Библиотека документов</Link></li>
                        </ul>
                    </div>
                    <div className="header__toolbar">
                        <ul className="header__toolbar-list">
                            <li className="header__toolbar-item">
                                <a href="#" className="header__toolbar-link">
                                    <img src={Notify} alt="" className="header_toolbar-image" />
                                </a>
                            </li>
                            <li className="header__toolbar-list">
                                <img src={""} alt="" className="header__user-image" />
                            </li>
                            <li className="header__toolbar-item">
                                <a href="#" className="header__toolbar-link" onClick={() => setOpen(!open)}>
                                    <div className="header__toolbar-container">
                                        <h5 className="header__toolbar-title">{props.userName}</h5>
                                        <Modal open={open} />
                                    </div>
                                </a>
                            </li>
                            <li className="header__toolbar-item">
                                <a href="" className="header__toolbar-link"><img src={show} alt="" className="header_toolbar-image" /></a>
                            </li>
                            <li className="header__toolbar-item">
                                <a href="" className="header__toolbar-link"><img src={settings} alt="" className="header_toolbar-image" /></a>
                            </li>
                            <li className="header__toolbar-item">
                                <a href="" className="header__toolbar-link toolbar__dots">
                                    {/* <img src={dots} alt="" className="header_toolbar-image" /> */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
