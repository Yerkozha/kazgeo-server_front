import React from 'react'
import { Menu, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Header.scss'
import Send from '../../assets/image/circle_right.png'
import Enter from '../../assets/image/circle_left.png'
import CircleChecked from '../../assets/image/circle_checked.png'
import Edit from '../../assets/image/edit.png'
import SelectMultiple from '../../assets/image/select_multiple.png'
import FileNew from '../../assets/image/file_new.png'
import Folder from '../../assets/image/folder.png'
import Note from '../../assets/image/note.png'
import UserCheck from '../../assets/image/user_check.png'
import UserCircle from '../../assets/image/user_circle.png'
import UserVoice from '../../assets/image/user_voice.png'
import Group from '../../assets/image/Group 101.png'
import header__arrow from '../../assets/image/header__arrow.png'

export const ReferencesDropdown: React.FC<any> = (props:any) => {
    const { SubMenu } = Menu;

    const referencesMenu = (<Menu>
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
    const documentFlow = (<Menu>
                <Menu.Item icon={<img src={Send} alt='Send' />}><Link to="/document-flow">Входящие</Link></Menu.Item>
                <Menu.Item icon={<img src={Enter} alt='Send' />}><Link to="/document-flow">Исходящие</Link></Menu.Item>
                <Menu.Item icon={<img src={Edit} alt='Send' />}><Link to="/document-flow">Внутренние</Link></Menu.Item>
                <Menu.Item icon={<img src={UserCheck} alt='Send' />}><Link to="/document-flow">Обращение лиц</Link></Menu.Item>
                <Menu.Item icon={<img src={FileNew} alt='Send' />}><Link to="/document-flow">Договор </Link></Menu.Item>
                <Menu.Item icon={<img src={FileNew} alt='Send' />}><Link to="/document-flow">Приказы</Link></Menu.Item>
                <Menu.Item icon={<img src={UserCircle} alt='Send' />}><Link to="/document-flow">Поручения</Link></Menu.Item>
                <Menu.Item icon={<img src={Group} alt='Send' />}><Link to="/document-flow">Протоколы</Link></Menu.Item>
                <Menu.Item icon={<img src={CircleChecked} alt='Send' />}><Link to="/document-flow">Резолюция</Link></Menu.Item>
                <Menu.Item icon={<img src={UserVoice} alt='Send' />}><Link to="/document-flow">Распоряжения</Link></Menu.Item>
                <Menu.Item icon={<img src={Note} alt='Send' />}><Link to="/document-flow">Заявка в ЮД</Link></Menu.Item>
                <Menu.Item icon={<img src={Folder} alt='Send' />}><Link to="/document-flow">Виды приказов</Link></Menu.Item>
                <Menu.Item icon={<img src={SelectMultiple} alt='Send' />}><Link to="/document-flow">События ЭЦП</Link></Menu.Item>
        </Menu>
    )
    
    return (<Dropdown overlay={props.title === 'Документооборот' ? documentFlow : referencesMenu}>
            <a className="ant-dropdown-link header__menu-link" onClick={e => e.preventDefault()}>
                { props.title }<img src={header__arrow} alt='Arrow Header' style={{display: 'inline-block'}} />
            </a>
        </Dropdown>
    )
}

