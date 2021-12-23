import React, { useState } from 'react'
import { Layout, Steps } from 'antd'
import BlockNumber from '../../../assets/image/Shadow 74.png'
import '../DocumentFlow.scss'

import userPurple from '../../../assets/image/userPurple.png'
import UniqueFile from '../../../assets/image/unique-file.png'
import UniqueFile2 from '../../../assets/image/unique-file-2.png'
import { DocumentFlowTool } from '../../../components/common/Search/DocumentFlowTool'

export const Details = () => {
    const { Header, Content } = Layout

    const [state, setState] = useState({ current: 0 })

    document.addEventListener("DOMContentLoaded", () => {
        const pages = document.getElementsByClassName('unique__pages-btn')
        for (let i = 0; i < pages.length; i++) {
            pages[i].addEventListener('click', (e: any) => {
                for (let j = 0; j < pages.length; j++) {
                    pages[j].classList.remove('unique__pages-btn--active')
                }
                selectedBtn(i)

                // var el = pages[0]
                // debugger
                // while(el){
                //     if(el.tagName === 'BUTTON'){
                //         el.classList.remove('unique__pages-btn--active')
                //     }
                //     el = el.nextSibling
                // }
                // e.target.classList.add('unique__pages-btn--active')
            })
        }
        const selectedBtn = (index: number) => {
            pages[index].className += ' unique__pages-btn--active'
        }
    })
    return (<Layout>
        <Header className='site-layout-background' style={{ padding: 0, height: 40, margin: '10px 10px 0 10px' }}>
            <DocumentFlowTool />
        </Header>
        <Content
            className="site-layout-background"
            style={{
                background: '#f0f2f5',
                margin: '10px 10px 0 10px'

            }}
        >
            <div className="unique__document">
                <div className="unique__header">
                    <h1 className="unique__header-title">
                        ВХОДЯЩИЙ ДОКУМЕНТ №582 от 20.05.2021
                    </h1>
                    <ul className="unique__header-steps">
                        <li className="unique__header-item">
                            <button className="unique__header-btn">1</button>
                        </li>
                        <li className="unique__header-item">
                            <button className="unique__header-btn">2</button>
                        </li>
                        <li className="unique__header-item">
                            <button className="unique__header-btn">3</button>
                        </li>
                        <li className="unique__header-item">
                            <button className="unique__header-btn">4</button>
                        </li>
                        <li className="unique__header-item">
                            <button className="unique__header-btn">5</button>
                        </li>
                    </ul>
                    <ul className="unique__pages">
                        <li className="unique__pages-item">
                            <button className="unique__pages-btn unique__pages-btn--start ">Вложения</button>
                        </li>
                        <li className="unique__pages-item">
                            <button className="unique__pages-btn">Ход исполнения</button>
                        </li>
                        <li className="unique__pages-item">
                            <button className="unique__pages-btn">Комментарии</button>
                        </li>
                    </ul>
                </div>
                <div className="unique__content">
                    <div className="unique__content-pdf">
                        <img src={UniqueFile} alt="File" className="unique__content-img" />
                        <img src={UniqueFile2} alt="FIle" className="unique__content-img" />
                    </div>
                    <div className="unique__content-info">
                        <div className="unique__content-revising">
                            <h1 className="unique__content-title">
                                Реквизит
                            </h1>
                            <h1 className="unique__content-subtitle">
                                Корреспондент(внеш):
                            </h1>
                            <p className="unique__content-paragraph">
                                ТОО "Доктор Веб - Центральная Азия"
                            </p>

                            <h1 className="unique__content-subtitle">
                                Исх. номер и дата:
                            </h1>
                            <p className="unique__content-paragraph">
                                200521ППк1 от 20.05.2021
                            </p>

                            <h1 className="unique__content-subtitle">
                                Краткое содержание:
                            </h1>
                            <p className="unique__content-paragraph">
                                ТОО "Доктор Веб - Центральная Азия"
                            </p>

                            <h1 className="unique__content-subtitle">
                                Кому адресовано
                            </h1>
                            <div className="unique__to">
                                <span className="unique__to-img" />
                                <h1 className="unique__to-name">Исабеков Н.Д. (Руководитель Службы внутреннего аудита</h1>
                            </div>

                            <h1 className="unique__content-subtitle">
                                Является ответным на:
                            </h1>

                            <h1 className="unique__content-subtitle">
                                Имеет ссылку с:
                            </h1>

                        </div>
                        <div className="unique__content-revising">
                            <h1 className="unique__content-title">Резолюция</h1>
                            <h1 className="unique__content-subtitle">
                                Автор резолюции:
                            </h1>
                            <div className="unique__to">
                                <span className="unique__to-img" />
                                <h1 className="unique__to-name">Исабеков Н.Д. (Руководитель Службы внутреннего аудита</h1>
                            </div>
                            <h1 className="unique__content-subtitle">
                                Текст резолюции:
                            </h1>
                            <p className="unique__content-paragraph">
                                Для работы
                            </p>
                            <h1 className="unique__content-subtitle">
                                Исполнители:
                            </h1>
                            <div className="unique__to">
                                <span className="unique__to-img" />
                                <h1 className="unique__to-name">Исабеков Н.Д. (Руководитель Службы внутреннего аудита</h1>
                            </div>
                            <h1 className="unique__content-subtitle">
                                Срок исполнения:
                            </h1>
                            <p className="unique__content-paragraph">
                                20.05.2021
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    </Layout>
    )
}
