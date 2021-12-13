import React from 'react'
import { Layout, Menu, Typography, Divider, Space } from 'antd';
import {
    UserOutlined,
    UploadOutlined,
    SettingOutlined,
    PlusOutlined,
    MailOutlined,
    DownloadOutlined,
    PushpinOutlined,
    SendOutlined,
    DeleteOutlined,
    EllipsisOutlined,
    FileOutlined,
    FileProtectOutlined,
    UsergroupAddOutlined,
    TagsOutlined,
    SelectOutlined
} from '@ant-design/icons';
import { ReactComponent as CaretDown } from '../../assets/image/icon/caret_down.svg'
import { useState } from 'react';
import set from '../../assets/image/icon/settings_white.svg'
import plus from '../../assets/image/icon/plus.svg'
import { Link, useHistory } from 'react-router-dom'
import Search from '../common/Search/Search'

import '../../page/Main.scss'
import { AppStateType } from '../../redux/redux';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/app-reducer';

export const LayoutMail = (props: any) => {
    const dispatch = useDispatch()
    const isModal = useSelector((state: AppStateType) => state.app.isModal);
    const total = useSelector((state: AppStateType) => state.mail.total);
    const history = useHistory();
    const { SubMenu } = Menu
    const { Title } = Typography;
    const { Header, Sider, Content } = Layout;
    return (
        <Layout>
            <Sider width={220} trigger={null} collapsible collapsed={isModal} className='references__layout' style={{ background: "#FFFFFF" }}>

                <Menu mode="inline" defaultSelectedKeys={['1']} >
                        <Menu.Item key="1" icon={isModal && <MailOutlined />} onClick={() => {
                            dispatch(toggleModal(!isModal))
                        }}>
                    <div className="mail__toolbar">
                            Почта
                        <div className="mail__toolbar-items">
                        {!isModal && <><SettingOutlined onClick={(event) =>{ 
                            event.stopPropagation()
                            history.push("/settings")
                        }} />
                        <PlusOutlined onClick={(event) =>{ 
                            event.stopPropagation()
                            history.push("/message")
                        }} /></>}
                        </div>
                    </div>
                        </Menu.Item>
                    {/* <Title level={5} className='references__title' style={{marginBottom: 0,marginLeft: '22px',fontSize: 15}} ></Title> */}

                    <Divider style={{ margin: 0 }} />

                    <SubMenu key="sub1" icon={<DownloadOutlined />} title={<div className='incoming__mail-title'><span>Входящие</span><h5 className="">{total}</h5></div>}>
                        <Menu.ItemGroup key="g1">
                            <Menu.Item key="2" icon={<FileProtectOutlined />}>
                                Прочитанные
                            </Menu.Item>
                            <Menu.Item key="3" icon={<FileOutlined />}>
                                Непрочитанные
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>

                    <Menu.Item key="4" icon={<PushpinOutlined />}>
                        <Link to='/chosen-messages'>
                            Избранные
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<SendOutlined />}>
                        <Link to='/sent-messages'>
                            Отправленные
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<DeleteOutlined />}>
                        <Link to='/'>
                            Корзины
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<EllipsisOutlined />} title="Еще">
                        <Menu.Item key="7" icon={<SelectOutlined />}>
                            Исходящие
                        </Menu.Item>
                        <Menu.Item key="8" icon={<UsergroupAddOutlined />}>
                            Контакты
                        </Menu.Item>
                        <Menu.Item key="9" icon={<TagsOutlined />}>
                            <Link to='/create-label'>
                                Создать ярлык
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
                    <Search data={props.data} sendMail={props.sendMail} formData={props.formData} cancelMail={props.cancelMail} attachLabel={props.attachLabel} pickLabels={props.pickLabels} />
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
}
