import React, { useState } from 'react'
import './MainLayoutDocumentFlow.scss'
import { Tree } from 'antd';

export const MainLayoutDocumentFlow = (props: any) => {

  const initialTreeData = [
    { 
      title: 'Все',
      key: 'all'
    },
    { 
      title: 'По дате',
      key: 'by_date',
      children: Array.from(new Array(5),(val,index)=>{
        return {
          title: `${2015+index}`,
          key: `${2015+index}`
        }
      })
    },
    { 
      title: 'По статусу',
      key: 'by_status',
      children: [
        {
          title: 'Исполнен',
          key: 'completed'
        },
        {
          title: 'На исполнении',
          key: 'completing'
        }
      ]
    },
    { title: 'По отв. исполнителю', key: 'by_performer'},
    { title: 'По типу контроля', key: 'by_controlType'},
    { title: 'По корреспонденту', key: 'by_correspondent'}
  ]
  console.log(initialTreeData)

  const [treeData] = useState(initialTreeData);

  return (
    <div className="documentflow__wrapper">
      <div className="sidebar__documentflow">
        <div className="sidebar__header">
          <span className="sidebar__header__title">Входящие докум</span>
          <div className="sidebar__header__buttons">
            <button className="sidebar__header__button plus"></button>
            <button className="sidebar__header__button eye"></button>
          </div>
        </div>
        <div className="sidebar__body">
          <Tree treeData={treeData} />
        </div>
      </div>
      <div className="content__documentflow">
        {props.children}
      </div>
    </div>
  )
}