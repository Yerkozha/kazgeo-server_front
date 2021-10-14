import React from 'react'
import MainLayot from '../enter/Main'
import '../Main.scss'
import { Table, Tag, Space } from 'antd';
import plus from '../../assets/image/icon/plus.svg'

type PropsType = {
    isModal: boolean,
    toggleModal: ()=> void
}


const MyDocument: React.FC<PropsType> = (props) => {



    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        }

    ];

    return (
        <div className="my-document">
           
           <div className="main__wrapper">
            {props.isModal && <nav className="navbar">
                <div className="navbar__inner">
                    <div className="navbar__header">
                        <h5 className="navbar__header-title">
                            {/* Menu title */}
                            <a className='navbar__header-title' onClick={() => props.toggleModal()}>Мои документы</a>
                        </h5>
                        <div className="navbar__header-container">
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
                                        <button className="main-subcontent__btn">
                                            <div className="arrow_up"></div>
                                            В работе
                                        </button>
                                        <div className="navbar__main-subcontent">
                                            <button className="main-subcontent__btn">На исполнении</button>
                                        </div>
                                    </div>
                                    <h3 className="navbar__main-count">655</h3>
                                </div>
                            </li>
                            <li className="navbar__menu-item">
                                <div className="navbar__menu-container">
                                    <div className="navbar__main-item">
                                        <button className="main-subcontent__btn">
                                            <div className="arrow_up"></div>
                                            Рассмотренные
                                        </button>
                                        <div className="navbar__main-subcontent">
                                            <button className="main-subcontent__btn">На исполнении</button>
                                        </div>
                                    </div>
                                    <h3 className="navbar__main-count">655</h3>
                                </div>
                            </li>
                            <li className="navbar__menu-item">
                                <div className="navbar__menu-container">
                                    <div className="navbar__main-item">
                                        <button className="main-subcontent__btn">
                                            <div className="arrow_up"></div>
                                            Мои проекты
                                        </button>
                                        <div className="navbar__main-subcontent">
                                            <button className="main-subcontent__btn">На исполнении</button>
                                        </div>
                                    </div>
                                    <h3 className="navbar__main-count">655</h3>
                                </div>
                            </li>
                            <li className="navbar__menu-item">
                                <div className="navbar__menu-container">
                                    <div className="navbar__main-item">
                                        <button className="main-subcontent__btn">
                                            <div className="arrow_up"></div>
                                            Исходящие
                                        </button>
                                        <div className="navbar__main-subcontent">
                                            <button className="main-subcontent__btn">На исполнении</button>
                                        </div>
                                    </div>
                                    <h3 className="navbar__main-count">655</h3>
                                </div>
                            </li>
                            <li className="navbar__menu-item">
                                <div className="navbar__menu-container">
                                    <div className="navbar__main-item">
                                        <button className="main-subcontent__btn">
                                            <div className="arrow_up"></div>
                                            Мои поручения
                                        </button>
                                        <div className="navbar__main-subcontent">
                                            <button className="main-subcontent__btn">На исполнении</button>
                                        </div>
                                    </div>
                                    <h3 className="navbar__main-count">655</h3>
                                </div>
                            </li>
                            {/* <li className="navbar__menu-item">
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
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>}

            <div className="content">
                {/* <Table dataSource={} columns={columns} />;  */}
            </div>

        </div>
           
        </div>
    )
}

export default MyDocument
