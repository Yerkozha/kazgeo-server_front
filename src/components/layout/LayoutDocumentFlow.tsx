import React from 'react'
import { ReactComponent as CaretDown } from '../../assets/image/icon/caret_down.svg'
import { Link, useHistory } from 'react-router-dom'
import Search from '../common/Search/Search'
import { Layout, Menu, Typography, Divider, Space } from 'antd';
import {
  PlusOutlined,
  MailOutlined,
  UserSwitchOutlined,
  CheckSquareOutlined,
  ControlOutlined,
  PieChartOutlined,
  EyeOutlined,
  AlignCenterOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';
import '../../page/Main.scss'
import { AppStateType } from '../../redux/redux';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/app-reducer';
import './MainLayoutDocumentFlow.scss'

// export const MainLayoutDocumentFlow = (props: any) => {
//   const initialTreeData = [
//     {
//       title: 'Все',
//       key: 'all'
//     },
//     {
//       title: 'По дате',
//       key: 'by_date',
//       children: Array.from(new Array(5), (val, index) => {
//         return {
//           title: `${2015 + index}`,
//           key: `${2015 + index}`
//         }
//       })
//     },
//     {
//       title: 'По статусу',
//       key: 'by_status',
//       children: [
//         {
//           title: 'Исполнен',
//           key: 'completed'
//         },
//         {
//           title: 'На исполнении',
//           key: 'completing'
//         }
//       ]
//     },
//     { title: 'По отв. исполнителю', key: 'by_performer' },
//     { title: 'По типу контроля', key: 'by_controlType' },
//     { title: 'По корреспонденту', key: 'by_correspondent' }
//   ]

//   const [treeData, setTreeData] = useState(initialTreeData);
//   return (
//     <div className="documentflow__wrapper">
//       <div className="sidebar__documentflow">
//         <div className="sidebar__header">
//           <span className="sidebar__header__title">Входящие докум</span>
//           <div className="sidebar__header__buttons">
//             <button className="sidebar__header__button plus"></button>
//             <button className="sidebar__header__button eye" onClick={() => {
//               props.setShowFilter(!props.showFilter)
//             }}></button>
//           </div>
//         </div>
//         <div className="sidebar__body">
//           <Tree treeData={treeData} />
//         </div>
//       </div>
//       <div className="content__documentflow">
//         {props.children}
//       </div>
//     </div>
//   )
// }





export const LayoutDocumentFlow = (props: any) => {
  const dispatch = useDispatch()
  const isModal = useSelector((state: AppStateType) => state.app.isModal);
  //const total = useSelector((state: AppStateType) => state.mail.total);
  const history = useHistory();
  const { SubMenu } = Menu
  const { Header, Sider, Content } = Layout;
  return (
    <Layout>
      <Sider width={220} trigger={null} collapsible collapsed={isModal} className='references__layout' style={{ background: "#FFFFFF" }}>
        <Menu mode="inline" defaultSelectedKeys={['1']} >
          <Menu.Item key="1" icon={isModal && <MailOutlined />} onClick={() => {
            dispatch(toggleModal(!isModal))
            //history.push('/document-flow')
          }}>
            <div className="mail__toolbar">
              Входящие докум
              <div className="mail__toolbar-items">
                {!isModal && <><PlusOutlined onClick={(event) => {
                  event.stopPropagation()
                  // history.push("/")
                }} />
                  <EyeOutlined onClick={(event) => {
                    event.stopPropagation()
                    history.push("/document-flow-filter")
                  }} /></>}
              </div>
            </div>
          </Menu.Item>
          {/* <Title level={5} className='references__title' style={{marginBottom: 0,marginLeft: '22px',fontSize: 15}} ></Title> */}

          <Divider style={{ margin: 0 }} />
          <Menu.Item key="2" icon={<AlignCenterOutlined />}>
            <Link to='/document-flow'>
              Все
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<PieChartOutlined />} title='По дате'>
            <Menu.ItemGroup key="g1">
              <Menu.Item key="3">
                <div className="filter__by-date">
                <span className='filter__date-title'>2015</span><span className='filter__date'>125</span>
                </div>
              </Menu.Item>
              <Menu.Item key="4">
                <div className="filter__by-date">
                <span className='filter__date-title'>2016</span><span className='filter__date'>125</span>
              </div></Menu.Item>
              <Menu.Item key="5">
                <div className="filter__by-date">
                <span className='filter__date-title'>2017</span><span className='filter__date'>125</span>
              </div></Menu.Item>
              <Menu.Item key="6">
                <div className="filter__by-date">
                <span className='filter__date-title'>2018</span><span className='filter__date'>125</span>
              </div></Menu.Item>
              <Menu.Item key="7">
                <div className="filter__by-date">
                <span className='filter__date-title'>2019</span><span className='filter__date'>125</span>
              </div></Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key="sub2" icon={<CheckSquareOutlined />} title='По статусу'>
            <Menu.Item key="8">
              <Link to='/'>
                Исполнен
              </Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to='/'>
                На исполнении
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<UsergroupAddOutlined />} title='По отв. исполнителю'>
            <Menu.Item key="10">
              <Link to='/'>
                ФИО
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<ControlOutlined />} title='По типу контроля'>
            <Menu.Item key="11">
              Весьма срочно
            </Menu.Item>
            <Menu.Item key="12">
              Долгосрочный
            </Menu.Item>
            <Menu.Item key="13">
              Контроль
            </Menu.Item>
            <Menu.Item key="14">
              Контроль Администра
            </Menu.Item>
            <Menu.Item key="15">
              Президента
            </Menu.Item>
            <Menu.Item key="16">
              Контрольный
            </Menu.Item>
            <Menu.Item key="17">
              Краткосрочный
            </Menu.Item>
            <Menu.Item key="18">
              Не контрольный
            </Menu.Item>
            <Menu.Item key="19">
              Срочно
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<UserSwitchOutlined />} title='По корреспонденту'>
          <Menu.Item key="20">
            ФИО
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
  );
}
