import React from 'react'
import { Layout, Menu, Input, Button, Tree } from 'antd';
import '../Main.scss'
import {
    UserOutlined, SettingOutlined, DownOutlined,
    FrownOutlined,
    SmileOutlined,
    MehOutlined,
    FrownFilled,
    HomeOutlined
} from '@ant-design/icons';
import Search from '../../assets/image/icon/search_ref.png'

export const References: React.FC = () => {
    const { Header, Sider, Content } = Layout;
    const { Search } = Input;
    const suffix = (
        <SettingOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const treeData = [
        {
            title: '01 - АО «Национальная геологоразведочная компания «Казгеология»',
            key: '0-0',
            icon: <SmileOutlined />,
            children: [
                {
                    title: '02 - Совет Директоров',
                    key: '0-0-0',
                    icon: <MehOutlined />,
                    children: [
                        {
                            title: '02-1 - Корпоративный секретарь',
                            key: '0-0-0-0',
                            icon: <HomeOutlined />,
                        },
                        {
                            title: '06-8 - Проектный офис',
                            key: '0-0-0-1',
                            icon: <HomeOutlined />,
                            children: [{
                                title: 'Исабеков Н.Д. (Руководитель Службы внутреннего аудита',
                                key: '0-0-0-1-1',
                                icon: <UserOutlined />,
                            }
                            ]
                        },
                        {
                            title: '02-2 - Служба внутреннего аудита',
                            key: '0-0-0-2',
                            icon: <HomeOutlined />,
                            children: [{
                                title: 'Исабеков Н.Д. (Руководитель Службы внутреннего аудита',
                                key: '0-0-0-2-0',
                                icon: <UserOutlined />,
                            }
                            ]
                        }
                    ]
                },
            ],
        },
    ];
    return (<Layout>
        <Header className='site-layout-background' style={{ padding: 0, height: 40, margin: '10px 10px 0 10px' }}>
            <button className='references__btn'>ЭКСПОРТ В EXCEL</button>
            <Search suffix={suffix} />
        </Header>
        <Content
            className="site-layout-background"
            style={{
                background: '#ffffff',
                margin: '10px 10px 0px 10px',
                padding: 20,
            }}
        >
            <div className="references__tree">
                <Tree
                    showIcon
                    defaultExpandAll
                    defaultSelectedKeys={['0-0-0']}
                    switcherIcon={<DownOutlined />}
                    treeData={treeData}
                />
            </div>
        </Content>
    </Layout>
    )
}
