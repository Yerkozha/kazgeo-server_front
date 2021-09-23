import React from 'react'
import './Main.scss'
import set from '../../assets/image/icon/settings_white.svg'
import plus from '../../assets/image/icon/plus.svg'

function Main(props:any) {
    return (
        <div className="main__wrapper">
                <nav className="navbar">
                    <div className="navbar__inner">
                        <div className="navbar__header">
                            <h5 className="navbar__header-title">
                            {/* Menu title */}
                            Почта
                            </h5>
                            <div className="navbar__header-container">
                                <button className="navbar__header-btn">
                            <img src={set} alt="" />
                            </button>
                            <button className="navbar__header-btn">  
                            <img src={plus} alt="" className="navbar__header-btn" />
                            </button>
                            </div>
                        </div>
                        
                        <div className="navbar__main">
                            <ul className="navbar__menu">
                                <li className="navbar__menu-item">
                                    <div className="navbar__menu-container">
                            <div className="navbar__main-item">
                                
                            <button className="main-subcontent__btn"><div className="arrow_up"></div>Входящие</button>
                            <div className="navbar__main-subcontent">
                                <button className="main-subcontent__btn">Прочитанные</button>
                                <button className="main-subcontent__btn">Непрочитанные</button>
                            </div>
                            </div>
                            <h3 className="navbar__main-count">655</h3>
                            </div>
                            </li>
                            <li className="navbar__menu-item">
                            <button className="navbar__menu-title main-subcontent__btn">
                            
                            Избранные
                            </button>
                            </li>
                            <li className="navbar__menu-item">
                            <button className="navbar__menu-title main-subcontent__btn">
                            На подписи
                            </button>
                            </li>
                            <li className="navbar__menu-item">
                            <button className="navbar__menu-title main-subcontent__btn">
                            Отправленные
                            </button>
                            </li>
                            <li className="navbar__menu-item">
                            <button className="navbar__menu-title main-subcontent__btn">
                            Черновики
                            </button>
                            </li>
                            <li className="navbar__menu-item">
                            <button className="navbar__menu-title main-subcontent__btn">
                            Корзины
                            </button>
                            </li>
                            <li className="navbar__menu-item">
                            <button className="navbar__menu-title main-subcontent__btn">
                            Еще
                            </button>
                            <ul className="menu__additional">
                                <li className="menu__additional-item">
                                    <button className="menu__additional-btn main-subcontent__btn">
                                    Исходящие
                                    </button>
                                </li>
                                <li className="menu__additional-item">
                                    <button className="menu__additional-btn main-subcontent__btn">
                                    Контакты
                                    </button>
                                </li>
                                <li className="menu__additional-item">
                                    <button className="menu__additional-btn main-subcontent__btn">
                                    Создать ярлык
                                    </button>
                                </li>
                            </ul>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                <div className="content">
                    {props.children}
                </div>
        
        </div>
    )
}

export default Main
