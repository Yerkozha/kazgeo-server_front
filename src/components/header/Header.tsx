import React from 'react'
import './Header.scss'
import Notify from '../../assets/image/icon/notify.svg'
import settings from '../../assets/image/icon/settings.svg'
import show from '../../assets/image/icon/show.svg'
import {DropDown, Modal,ModalItem} from '../common/Modal/Modal'


function Header() {
    return (
        <div className='header'>
            <div className="container">
                <div className="header__inner">
                    <div className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-item"><a href="#" className="header__menu-link">Почта</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-link">Мои документы</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-link">Справочники</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-link">Документооборот</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-link">Библиотека документов</a></li>
                        </ul>
                    </div>
                    <div className="header__toolbar">
                        <ul className="header__toolbar-list">
                            <li className="header__toolbar-item">
                                <a href="" className="header__toolbar-link">
                                    <img src={Notify} alt="" className="header_toolbar-image" />
                                </a>
                            </li>
                            <li className="header__toolbar-item">
                                <a href="" className="header__toolbar-link">
                                    <button className="header__toolbar-user">
                                    <img src="show" alt="" className="header__user-image" />
                                    User<div className="arrow_down"></div>
                                    </button>
                                </a>
                              
                                {/* <Modal>
                                <ModalItem icon={<Show />}>
                                    <DropDown />
                                </ModalItem>
                                </Modal> */}
                            </li>
                            <li className="header__toolbar-item">
                                <a href="" className="header__toolbar-link"><img src={""} alt="" className="header_toolbar-image" /></a>
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

export default Header
