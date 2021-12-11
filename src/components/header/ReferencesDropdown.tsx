import React from 'react'
import { Menu, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Header.scss'

export const ReferencesDropdown: React.FC = () => {
    const { SubMenu } = Menu;

    const menu = (<Menu>
            <Menu.ItemGroup>
                <Menu.Item><Link to="/references">Структура</Link></Menu.Item>
            </Menu.ItemGroup>
            <SubMenu title="Системные">
                <Menu.Item><Link to="/references">Группы</Link></Menu.Item>
                <Menu.Item><Link to="/references">Название должностей</Link></Menu.Item>
                <Menu.Item><Link to="/references">Должности</Link></Menu.Item>
                <Menu.Item><Link to="/references">Подразделения</Link></Menu.Item>
            </SubMenu>
            <SubMenu title="По документообороту">
                <Menu.Item><Link to="/references">Корреспонденты</Link></Menu.Item>
                <Menu.Item><Link to="/references">Виды документов</Link></Menu.Item>
                <Menu.Item><Link to="/references">Характеры вопросов</Link></Menu.Item>
                <Menu.Item><Link to="/references">Типы контроля</Link></Menu.Item>
                <Menu.Item><Link to="/references">Типы организаций</Link></Menu.Item>
                <Menu.Item><Link to="/references">Типы подразделения</Link></Menu.Item>
                <Menu.Item><Link to="/references">Регистрационные номера</Link></Menu.Item>
                <Menu.Item><Link to="/references">Номенклатура дел</Link></Menu.Item>
                <Menu.Item><Link to="/references">Виды договоров</Link></Menu.Item>
            </SubMenu>
            <SubMenu title="Общие">
                <Menu.Item><Link to="/references">Города</Link></Menu.Item>
                <Menu.Item><Link to="/references">Регионы</Link></Menu.Item>
                <Menu.Item><Link to="/references">Национальности</Link></Menu.Item>
            </SubMenu>
        </Menu>
    )
    return (<Dropdown overlay={menu}>
            <a className="ant-dropdown-link header__menu-link" onClick={e => e.preventDefault()}>
                Справочники <CaretDownOutlined />
            </a>
        </Dropdown>
    )
}

