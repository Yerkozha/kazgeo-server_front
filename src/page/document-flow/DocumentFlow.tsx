import React from 'react'
import { MainLayoutDocumentFlow } from '../../components/layout/MainLayoutDocumentFlow'
import './DocumentFlow.scss'
import { Checkbox, Table } from 'antd';

export const DocumentFlow = (props: any) => {

  const columns = [
    {
      title: '',
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: (id: string | undefined) => <Checkbox/>
    },
    {
      title: '',
      dataIndex: 'link',
      key: 'link',
      render: (link: string | undefined) => <a href={link} target="_blank" rel="noreferrer"><div className="docflow__table__link"></div></a>
    },
    {
      title: 'Рег.№',
      dataIndex: 'reg_number',
      key: 'reg_number',
    },
    {
      title: 'Рег.дата',
      dataIndex: 'reg_date',
      key: 'reg_date',
    },
    {
      title: 'Исх.№',
      dataIndex: 'init_number',
      key: 'init_number',
    },
    {
      title: 'Дата исх.',
      dataIndex: 'init_date',
      key: 'init_date',
    },
    {
      title: 'Кр.сод.основного д-та',
      dataIndex: 'doc_summary',
      key: 'doc_summary',
    },
    {
      title: 'Корреспондент',
      dataIndex: 'correspondent',
      key: 'correspondent',
    },
    {
      title: 'Статус исп',
      dataIndex: 'exec_status',
      key: 'exec_status',
    },
    {
      title: 'Отв. испол.',
      dataIndex: 'resp_exec',
      key: 'resp_exec',
    },
    {
      title: 'Срок исп.',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      title: 'Ост.',
      dataIndex: 'left',
      key: 'left',
    },
    {
      title: 'Факт. срок',
      dataIndex: 'fact_deadline',
      key: 'fact_deadline',
    },
    {
      title: 'Сокр. наз подр',
      dataIndex: 'abbr_name',
      key: 'abbr_name',
    },
  ];
  
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      checkbox: false,
      link: 'https://codetau.com',
      reg_number: '1841',
      reg_date: '	12.11.2020',
      init_number: '1841',
      init_date: '12.11.2020',
      doc_summary: 'О проверке на предмет испол',
      correspondent: 'Джамалов П.Р',
      exec_status: 'На исполнении',
      resp_exec: 'Джамалов П.Р',
      deadline: '30.01.2020',
      left: '23',
      fact_deadline: '30.01.2020',
      abbr_name: 'Резолюция'
    });
  }

  return (
    <MainLayoutDocumentFlow>
      <div className="docflow__wrapper">
        <div className="docflow__header">
          <div className="docflow__header__selectors">
            <div className="docflow__header__export">
              <Checkbox/>
              <span>ЭКСПОРТ В EXCEL</span>
            </div>
            <span className="docflow__header__categories">КАТЕГОРИИ</span>
          </div>
          <div className="docflow__header__search">
            <input type="text" placeholder="Найти" />
            <button className="settings"></button>
          </div>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </MainLayoutDocumentFlow>
  )
}
