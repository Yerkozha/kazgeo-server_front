import React, { useEffect, useState } from 'react'
import '../../page/Main.scss'
import set from '../../assets/image/icon/settings_white.svg'
import plus from '../../assets/image/icon/plus.svg'
import { Table, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import { ReactComponent as CaretDown } from '../../assets/image/icon/caret_down.svg'

import Search from '../common/Search/Search'

export const MainLayout = (props: any) => {

    const [state, setState] = useState({
        isMailActive: true,
        isYet: false
    })


    return (
        <div className={props.isModal ? "main__wrapper" : "active-main_wrapper"}>
            <CSSTransition 
                in={props.isModal}
                timeout={300}
                classNames="navbar__transition"
                mountOnEnter
                unmountOnExit>
                <div>
                    {props.isModal && <nav className="navbar">
                        <div className="navbar__inner">
                            <div className="navbar__header">
                                <a className='navbar__header-title' onClick={() => {
                                    props.toggleModal(!props.isModal)
                                }}>Почта</a>
                                <div className="navbar__header-container">
                                    <button className="navbar__header-btn">
                                        <img src={set} alt="" />
                                    </button>
                                    <button className="navbar__header-btn">
                                        <img src={plus} alt="" />
                                    </button>
                                </div>
                            </div>

                            <div className="navbar__main">
                                <ul className="navbar__menu">
                                    <li className="navbar__menu-item">
                                        <div className="navbar__menu-container">
                                            <div className="navbar__main-item">
                                                <button className="main-subcontent__btn main-subcontent__btn--image" onClick={() => setState((s) => ({
                                                    ...s,
                                                    isMailActive: !state.isMailActive
                                                }))}>
                                                    <div className="arrow-container">
                                                        <CaretDown className={state.isMailActive ? 'arrow' : 'arrow-rotate'} />
                                                    </div>
                                                    Входящие
                                                </button>

                                                {state.isMailActive && <ul className="navbar__main-subcontent">
                                                    <li className="navbar__main-extra">
                                                        <Link to='/' className="main-subcontent__btn">Прочитанные</Link>
                                                    </li>
                                                    <li className="navbar__main-extra">
                                                        <Link to='/' className="main-subcontent__btn">Непрочитанные</Link>
                                                    </li>
                                                </ul>}

                                            </div>
                                            <h5 className="navbar__main-count">655</h5>
                                        </div>
                                    </li>
                                    <li className="navbar__menu-item">
                                        <Link to='/' className="main-subcontent__btn">
                                            Избранные
                                        </Link>
                                    </li>
                                    <li className="navbar__menu-item">
                                        <Link to='/' className="main-subcontent__btn">
                                            На подписи
                                        </Link>
                                    </li>
                                    <li className="navbar__menu-item">
                                        <Link to='/' className="main-subcontent__btn">
                                            Отправленные
                                        </Link>
                                    </li>
                                    <li className="navbar__menu-item">
                                        <Link to='/' className="main-subcontent__btn">
                                            Черновики
                                        </Link>
                                    </li>
                                    <li className="navbar__menu-item">
                                        <Link to='/' className="main-subcontent__btn">
                                            Корзины
                                        </Link>
                                    </li>
                                    <li className="navbar__menu-item">
                                        <CSSTransition in={state.isYet}
                                            timeout={300}
                                            classNames="menu__additional"
                                            mountOnEnter
                                            unmountOnExit>
                                            <div>
                                                {state.isYet && <ul className="menu__additional">
                                                    <li className="menu__additional-item">
                                                        <Link to='/' className="navbar__menu-title main-subcontent__btn">
                                                            Исходящие
                                                        </Link>
                                                    </li>
                                                    <li className=" menu__additional-item">
                                                        <Link to='/' className="navbar__menu-title main-subcontent__btn">
                                                            Контакты
                                                        </Link>
                                                    </li>
                                                    <li className="menu__additional-item">
                                                        <Link to='/create-label' className="navbar__menu-title main-subcontent__btn">
                                                            Создать ярлык
                                                        </Link>
                                                    </li>
                                                </ul>}
                                            </div>
                                        </CSSTransition>

                                        <button className="main-subcontent__btn" onClick={() => setState((s) => ({ ...s, isYet: !state.isYet }))} >
                                            {state.isYet ? "Свернуть" : "Еще"}
                                            <CaretDown className={state.isYet ? 'arrow-rotate' : 'arrow'} />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>}
                </div>
            </CSSTransition>


            <div className="content">
                <Search />
                {props.children}
            </div>

        </div>
    )
}