import { Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import { DocumentFlowTool } from '../../../components/common/Search/DocumentFlowTool'
import '../DocumentFlow.scss'
import FolderOpen from '../../../assets/image/icon/folder_open.png'
import User from '../../../assets/image/document_user.png'
import ReactHtmlParser from 'react-html-parser'

export const UniqueDocument = () => {
    const { Header, Content } = Layout

    const [currentComponent, setCurrentComponent] = useState<any>('mainInfo')

    const onSelectMenuItem = (item: string) => {
        switch (item) {
            case 'mainInfo':
                return setCurrentComponent('mainInfo')
            case 'listControl':
                return setCurrentComponent('listControl')
            case 'nomenclature':
                return setCurrentComponent('nomenclature')
            case 'process':
                return setCurrentComponent('process')
            case 'comment':
                return setCurrentComponent('comment')
        }
    }
    const components = {
        mainInfo: <MainInfo />,
        listControl: <ListControl />,
        nomenclature: <Nomenclature />,
        process: <ProgressExecution />,
        comment: <Comments />
    }

    return (
        <Layout>
            <Header className='site-layout-background' style={{ padding: 0, height: 40, margin: '10px 10px 0 10px' }}>
                <DocumentFlowTool />
            </Header>
            <Content
                className="site-layout-background"
                style={{
                    background: '#f0f2f5',
                    margin: '10px 10px 0 10px',
                }}
            >
                <div className="document">
                    <div className="document__header">
                        <div className="document__header-title">
                            <h1 className="unique__header-title">
                                Пункт № к документу № от
                            </h1>
                            <h1 className="unique__header-title">
                                Не контрольный
                            </h1>
                        </div>
                        <ul className="unique__header-steps">
                            <li className="unique__header-item">
                                <button className="unique__header-btn">1</button>
                            </li>
                            <li className="unique__header-item">
                                <button className="unique__header-btn unique__header-btn--inactive">2</button>
                            </li>
                            <li className="unique__header-item">
                                <button className="unique__header-btn unique__header-btn--inactive">3</button>
                            </li>
                            <li className="unique__header-item">
                                <button className="unique__header-btn unique__header-btn--inactive">4</button>
                            </li>
                        </ul>
                    </div>
                    <div className="document__menu">
                        <ul className="document__menu-list">
                            <li className="document__menu-item">
                                <button className="document__menu-btn" onClick={() => onSelectMenuItem('mainInfo')}>
                                    ОСНОВНАЯ ИНФОРМАЦИЯ
                                </button>
                            </li>
                            <li className="document__menu-item">
                                <button className="document__menu-btn" onClick={() => onSelectMenuItem('listControl')}>
                                    ЛИСТ КОНТРОЛЯ
                                </button>
                            </li>
                            <li className="document__menu-item">
                                <button className="document__menu-btn" onClick={() => onSelectMenuItem('nomenclature')}>
                                    НОМЕНКЛАТУРА
                                </button>
                            </li>
                            <li className="document__menu-item">
                                <button className="document__menu-btn" onClick={() => onSelectMenuItem('process')}>
                                    ХОД ИСПОЛНЕНИЯ
                                </button>
                            </li>
                            <li className="document__menu-item">
                                <button className="document__menu-btn" onClick={() => onSelectMenuItem('comment')}>
                                    КОММЕНТАРИИ
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="document__form">
                        <form action="POST" className='form'>
                            {/* @ts-ignore */}
                        {components[currentComponent]}
                            <div className="form__btn">
                                <button className="form__save">
                                    СОХРАНИТЬ
                                </button>
                                <button className="form__cancel">
                                    ОТМЕНИТЬ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Content>
        </Layout>
    )
}

const MainInfo = () => {
    return <>
        <div className="registration__info">
            <h1 className="unique__content-title">
                Регистрационные реквизиты
            </h1>
            <h1 className="unique__content-subtitle unique__content-subtitle--star">
                Номер пункта:
            </h1>
            <input type="text" className='form__input' placeholder='Введите' />
            <h1 className="unique__content-subtitle">
                Вид документа:
            </h1>
            <div className="form__input-species">
                <input type="text" className='form__input' placeholder='Введите' />
                <img src={FolderOpen} alt="FolderOpen" className='form__input-img' />
            </div>
            <h1 className="unique__content-subtitle">
                Характер вопроса:
            </h1>
            <div className="form__input-species">
                <input type="text" className='form__input' placeholder='Введите' />
                <img src={FolderOpen} alt="FolderOpen" className='form__input-img' />
            </div>
            <h1 className="unique__content-subtitle">
                Директивный номер КПМ:
            </h1>
            <input type="text" className='form__input' placeholder='Введите' />
        </div>
        <div className="sender__info">
            <h1 className="unique__content-title">
                РЕКВИЗИТЫ ПРИСВОЕННЫЕ ОТПРАВИТЕЛЕМ
            </h1>
            <h1 className="unique__content-subtitle unique__content-subtitle--star">
                Корреспондент (внеш):
            </h1>
            <input type="text" className='form__input' placeholder='Введите' />
            <h1 className="unique__content-subtitle">
                Исх. номер и дата:
            </h1>
            <input type="text" className='form__input' placeholder='Введите' />
            <h1 className="unique__content-subtitle">
                Автор:
            </h1>
            <div className="form__input-species">
                <input type="text" className='form__input' placeholder='Введите' />
                <img src={User} alt="FolderOpen" className='form__input-img' />
            </div>
            <h1 className="unique__content-subtitle">
                Исполнитель:
            </h1>
            <div className="form__input-species">
                <input type="text" className='form__input' placeholder='Введите' />
                <img src={User} alt="FolderOpen" className='form__input-img' />
            </div>
            <h1 className="unique__content-subtitle">
                Язык документа:
            </h1>
            <input type="text" className='form__input' placeholder='Введите' />
        </div>
        <div className="short__content">
            <h1 className="unique__content-title">
                Краткое содержание
            </h1>
            <h1 className="unique__content-subtitle">
                Краткое содержание документа:
            </h1>
            <input type="text" className='form__input' />
            <h1 className="unique__content-subtitle">
                Краткое содержание:*
            </h1>
            <input type="text" className='form__input' />
        </div>
        <div className="sender__info">
            <h1 className="unique__content-title">
                Внутренние исполнители
            </h1>
            <h1 className="unique__content-subtitle">
                Отв. исп. внутр.:
            </h1>
            <div className="form__input-species">
                <input type="text" className='form__input' placeholder='Введите' />
                <img src={User} alt="FolderOpen" className='form__input-img' />
            </div>
            <h1 className="unique__content-subtitle">
                Внутр. исполнители:*
            </h1>
            <div className="form__input-species">
                <input type="text" className='form__input' placeholder='Введите' />
                <img src={User} alt="FolderOpen" className='form__input-img' />
            </div>
        </div>
        <div className="sender__info">
            <h1 className="unique__content-title">
                Внешние исполнители
            </h1>
            <h1 className="unique__content-subtitle">
                Отв. исп. внеш.:
            </h1>
            <div className="form__input-species">
                <input type="text" className='form__input' placeholder='Введите' />
                <img src={User} alt="FolderOpen" className='form__input-img' />
            </div>
            <h1 className="unique__content-subtitle">
                Внеш. исполнители:
            </h1>
            <div className="form__input-species">
                <input type="text" className='form__input' placeholder='Введите' />
                <img src={User} alt="FolderOpen" className='form__input-img' />
            </div>
        </div>
        <div className="short__content">
            <h1 className="unique__content-title">
                Ссылки
            </h1>
            <h1 className="unique__content-subtitle">
                Является ответным на:
            </h1>
            <div className="form__input-species">
                <input type="text" className='form__input' placeholder='Введите' />
                <img src={FolderOpen} alt="FolderOpen" className='form__input-img' />
            </div>
            <h1 className="unique__content-subtitle">
                Имеет ссылку с:
            </h1>
            <input type="text" className='form__input' />
        </div></>
}

const ListControl = () => {

    return <>
        <div className="sender__info">
            <h1 className="unique__content-title">
                Внутренний контроль: не контрольный
            </h1>
            <h1 className="unique__content-subtitle">
                Поставил на контроль:
            </h1>
            <input type="text" className='form__input' placeholder='Введите' />
            <h1 className="unique__content-subtitle">
                Периодичность контроля:
            </h1>
            <input type="text" className='form__input' />
            <h1 className="unique__content-subtitle">
                Дата пост. на контроль:
            </h1>
            <input type="text" className='form__input' />
            <h1 className="unique__content-subtitle">
                Перв. срок исполнения:
            </h1>
            <input type="text" className='form__input' />
            <h1 className="unique__content-subtitle">
                Текущий срок исполнения:
            </h1>
            <input type="text" className='form__input' />
            <h1 className="unique__content-subtitle">
                Факт. срок исполнения:
            </h1>
            <input type="text" className='form__input' />
        </div>
        <div className="incontrol">
            <h1 className="unique__content-title">
                Внешний контроль: не контрольный
            </h1>
            <h1 className="unique__content-subtitle">
                Перв. срок исполнения:
            </h1>
            <input type="text" className='form__input' />
            <h1 className="unique__content-subtitle">
                Срок исполнения:
            </h1>
            <input type="text" className='form__input' />
        </div>
        <div className="short__content">
            <h1 className="unique__content-title">
                История продления внутреннего срока исполнения
            </h1>
        </div>
        <div className="short__content">
            <h1 className="unique__content-title">
                текст исполнения
            </h1>
        </div>
    </>
}

const Nomenclature = () => {
    return <>
        <div className="nomenclature">
            <h1 className="unique__content-title">
                Номенклатура
            </h1>
            <h1 className="unique__content-subtitle">
                Индекс дела:
            </h1>
            <input type="text" className='form__input' placeholder='Введите' />
            <h1 className="unique__content-subtitle">
                Имеет ссылку с:
            </h1>
            <input type="text" className='form__input' />
            <h1 className="unique__content-subtitle">
                Тип хранения:
            </h1>
            <input type="text" className='form__input' />
            <h1 className="unique__content-subtitle">
                Срок хранения:
            </h1>
            <input type="text" className='form__input' />
            <h1 className="unique__content-subtitle">
                Заголовок дела:
            </h1>
            <input type="text" className='form__input' />
            <h1 className="unique__content-subtitle">
                Номер тома:
            </h1>
            <input type="text" className='form__input' />
        </div>
    </>
}

const ProgressExecution = () => {
    return <>
        <div className="short__content">
            <h1 className="unique__content-title">
                Ссылки
            </h1>
        </div>
    </>
}

const Comments = () => {
    return <>
        <div className="short__content">
            <h1 className="unique__content-title">
                Комментарии
            </h1>
            <p className="comments">
                Нет комментариев
            </p>
        </div>
    </>
}
