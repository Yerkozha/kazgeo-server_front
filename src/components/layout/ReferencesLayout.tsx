import React from 'react'
import { Layout, Menu, Typography, Divider  } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    AppstoreOutlined,
    ArrowRightOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import './MainLayoutDocumentFlow.scss'


export const ReferencesLayout = ({children}: any) => {
    
    const [collapsed, setCollapsed] = useState(false)

    const { Title } = Typography;
    const { Header, Sider, Content } = Layout;
    return (
        <Layout>
            <Sider width={220} trigger={null} collapsible collapsed={collapsed} className='references__layout' style={{background: "#FFFFFF"}}>
                
                <Menu mode="inline" defaultSelectedKeys={['1']} >
                    <Menu.Item key="1" icon={collapsed && <ArrowRightOutlined />} onClick={() => setCollapsed(!collapsed)}>
                    Структура
                    {/* <Title level={5} className='references__title' style={{marginBottom: 0,marginLeft: '22px',fontSize: 15}} ></Title> */}
                    </Menu.Item>
                    <Divider style={{margin: 0}} />
                    <Menu.Item key="2" icon={<UserOutlined />}>
                    Подразделения
                    </Menu.Item>
                    <Menu.Item key="3" icon={<AppstoreOutlined />}>
                    Должности
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UploadOutlined />}>
                    Передача дел
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content
                    style={{
                        minHeight: '100vh'
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
