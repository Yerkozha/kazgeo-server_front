import React from 'react'
import { Layout, Menu, Typography, Divider, Space } from 'antd';
import {
    SettingOutlined,
    PlusOutlined,
    SendOutlined,
    DeleteOutlined,
    UploadOutlined,
    DatabaseOutlined,
    FileProtectOutlined,
    CheckSquareOutlined,
    SnippetsOutlined,
    FolderOutlined
} from '@ant-design/icons';
import { ReactComponent as CaretDown } from '../../assets/image/icon/caret_down.svg'
import { useState } from 'react';
import set from '../../assets/image/icon/settings_white.svg'
import plus from '../../assets/image/icon/plus.svg'
import { Link, useHistory } from 'react-router-dom'
import Search from '../common/Search/Search'

import { AppStateType } from '../../redux/redux';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/app-reducer';

import './MainLayoutDocumentFlow.scss'

type PropsType = {
    children: any
}

export const MyDocumentLayout: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch()
    const isModal = useSelector((state: AppStateType) => state.app.isModal);
    const total = useSelector((state: AppStateType) => state.mail.total);
    const history = useHistory();
    const { SubMenu } = Menu
    const { Header, Sider, Content } = Layout;

    return (
        <Layout>
            <Sider width={220} trigger={null} collapsible collapsed={isModal} className='references__layout' style={{ background: "#FFFFFF" }}>
                <Menu mode="inline">
                    <Menu.Item key="1" icon={isModal && <FolderOutlined />} onClick={() => {
                        dispatch(toggleModal(!isModal))
                        // history.push('/mail')
                    }}>
                        <div className="mail__toolbar">
                            Мои документы
                            <div className="mail__toolbar-items">
                                {!isModal && <PlusOutlined onClick={(event) => {
                                    event.stopPropagation()
                                    history.push("/message")
                                }} />}
                            </div>
                        </div>
                    </Menu.Item>
                    {/* <Title level={5} className='references__title' style={{marginBottom: 0,marginLeft: '22px',fontSize: 15}} ></Title> */}

                    <Divider style={{ margin: 0 }} />

                    <SubMenu key="sub1" icon={<SnippetsOutlined />} title={<div className='incoming__mail-title'><span>В работе </span><h5 className="">{total}</h5></div>}>
                        <Menu.ItemGroup key="g1">
                            <Menu.Item key="2">
                                <div className="executed-document">
                                    <h1 className="executed__document-font executed-color">На исполнении</h1>
                                    <h1 className="executed__document-font executed-color">12</h1>
                                </div>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>

                    <SubMenu key="sub2" icon={<CheckSquareOutlined />} title="Рассмотренные">
                        <Menu.Item key="3">
                            <div className="executed-document">
                                <Link to='/document-executed' className='executed__document-font'>
                                    Исполненные
                                </Link>
                                <span className="my-document__count executed__document-font">
                                    25
                                </span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="4"><div className="executed-document">
                            <Link to='/document-subscribe' className='executed__document-font'>
                                Подписанные
                            </Link>
                            <span className="my-document__count executed__document-font">
                                25
                            </span></div>
                        </Menu.Item>
                        <Menu.Item key="5"><div className="executed-document">
                            <Link to='/document-agreed' className='executed__document-font'>
                                Согласованные
                            </Link>
                            <span className="my-document__count executed__document-font">
                                25
                            </span></div>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub3" icon={<DatabaseOutlined />} title="Мои проекты">
                        <Menu.Item key="6">
                        <div className="executed-document">
                            <Link to='/document-drafts' className='executed__document-font'>
                                Черновики
                            </Link>
                            <span className="my-document__count executed__document-font">
                                25
                            </span>
                            </div>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub4" icon={<UploadOutlined />} title="Исходящие">
                        <Menu.Item key="7">
                            <Link to='/document-external' className='executed__document-font'>
                                Внешние
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to='/document-internal' className='executed__document-font'>
                                Внутренние
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content
                    style={{
                        minHeight: '100vh'
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}
