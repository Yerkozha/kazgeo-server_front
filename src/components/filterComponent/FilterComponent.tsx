import React from 'react'
import { Checkbox, Radio, Table } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import '../layout/MainLayoutDocumentFlow.scss'





const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

const columns = [
  {
    dataIndex: 'sort',
    width: 30,
    className: 'drag-visible',
    render: () => <DragHandle />
  },
  {
    dataIndex: 'name',
    className: 'drag-visible'
  },
  {
    dataIndex: 'checkbox',
    render: () => <Checkbox/>
  }
];

const data = [
  {
    key: '1',
    name: 'Тип',
    checkbox: false,
    index: 0,
  },
  {
    key: '2',
    name: 'Название рус.',
    checkbox: false,
    index: 1,
  },
  {
    key: '3',
    name: 'Название каз.',
    checkbox: false,
    index: 2,
  },
  {
    key: '3',
    name: 'Название каз.',
    checkbox: false,
    index: 2,
  },
  {
    key: '3',
    name: 'Название каз.',
    checkbox: false,
    index: 2,
  },
  {
    key: '3',
    name: 'Название каз.',
    checkbox: false,
    index: 2,
  },
  {
    key: '3',
    name: 'Название каз.',
    checkbox: false,
    index: 2,
  },
  {
    key: '3',
    name: 'Название каз.',
    checkbox: false,
    index: 2,
  },
  {
    key: '3',
    name: 'Название каз.',
    checkbox: false,
    index: 2,
  },
  {
    key: '3',
    name: 'Название каз.',
    checkbox: false,
    index: 2,
  },
]

const SortableItem = SortableElement((props: any) => <tr {...props} />);
const SortableContainers = SortableContainer((props: any) => <tbody {...props} />);

export class FilterComponent extends React.Component {
  state = {
    viewTypeValue: 1,
    dataSource: data,
  };
// @ts-ignore
  onSortEnd = ({ oldIndex, newIndex }) => {
    const { dataSource } = this.state;
    if (oldIndex !== newIndex) {
// @ts-ignore
      const newData = arrayMoveImmutable([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
      console.log('Sorted items: ', newData);
      this.setState({ dataSource: newData });
    }
  };
// @ts-ignore
  DraggableContainer = props => (
    <SortableContainers
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={this.onSortEnd}
      {...props}
    />
  );

// @ts-ignore
  DraggableBodyRow = ({ className, style, ...restProps }) => {
    const { dataSource } = this.state;
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  render() {
    const { dataSource } = this.state;

    return (

    <div className="docflow__wrapper">
    <div className="docflow__header">
        <div className="docflow__header__buttons">
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
      <div className="filter-body">
        <form action="#" method="post">
          <div className="filter__input-group">
            <span className="filter__input-name">Название представления</span>
            <input type="text" className="filter__input" placeholder="Введите имя представления"/>
          </div>
          <div className="filter__input-group">
            <span className="filter__input-name">Локализация</span>
            <select className="select">
              <option value="" disabled selected>Выберите права доступа</option>
            </select>
          </div>
          <div className="filter__warning-input">
            <span className="filter__warning-input__name">Вы можете сделать так, чтобы представление раскрылось автоматически после загрузки страницы</span>
            <Checkbox>Раскрывать представление</Checkbox>
          </div>
          <div className="filter__warning-input">
            <span className="filter__warning-input__name">Вид предоставления списка</span>
            <Radio.Group  value={this.state.viewTypeValue} onChange={ e => this.setState((s)=>({...s,
              viewTypeValue: e.target.value}))}>
              <Radio value={1}>Таблица</Radio>
              <Radio value={2}>Дерево</Radio>
              <Radio value={3}>Отчет</Radio>
            </Radio.Group>
          </div>
          <div className="filter__sorting-group">
            <div className="filter__sorting-group__item">
              <span className="filter__sorting-group__item__name">Поля представления</span>
              <div className="filter__sorting-group__item__table">
                <div className="filter__sorting-group__item__table__name">Выберите поля</div>
                <Table
                  pagination={false}
                  dataSource={dataSource}
                  columns={columns}
                  rowKey="index"
                  components={{
                    body: {
                      wrapper: this.DraggableContainer,
                      row: this.DraggableBodyRow,
                    },
                  }}
                  scroll={{ y: 318 }}
                />
              </div>
            </div>
            <div className="filter__sorting-group__item">
              <span className="filter__sorting-group__item__name">Группировка</span>
              <div className="filter__sorting-group__item__table">
                <div className="filter__sorting-group__item__table__name">Группировка по полям</div>
                <Table
                  pagination={false}
                  dataSource={dataSource}
                  columns={columns}
                  rowKey="index"
                  components={{
                    body: {
                      wrapper: this.DraggableContainer,
                      row: this.DraggableBodyRow,
                    },
                  }}
                  scroll={{ y: 318 }}
                />
              </div>
            </div>
            <div className="filter__sorting-group__item">
              <span className="filter__sorting-group__item__name">Сортировка</span>
              <div className="filter__sorting-group__item__table">
                <div className="filter__sorting-group__item__table__name">Сортировка по полям</div>
                <Table
                  pagination={false}
                  dataSource={dataSource}
                  columns={columns}
                  rowKey="index"
                  components={{
                    body: {
                      wrapper: this.DraggableContainer,
                      row: this.DraggableBodyRow,
                    },
                  }}
                  scroll={{ y: 318 }}
                />
              </div>
            </div>
            <div className="filter__sorting-group__item">
              <span className="filter__sorting-group__item__name">Поля ЗС</span>
              <div className="filter__sorting-group__item__table">
                <div className="filter__sorting-group__item__table__name">Выберите поля</div>
                <Table
                  pagination={false}
                  dataSource={dataSource}
                  columns={columns}
                  rowKey="index"
                  components={{
                    body: {
                      wrapper: this.DraggableContainer,
                      row: this.DraggableBodyRow,
                    },
                  }}
                  scroll={{ y: 318 }}
                />
              </div>
            </div>
          </div>
          <div className="filter__filtration">
            <span className="filter__filtration__name">Фильтрация</span>
            <button className="filter__filtration__button" type="button">Добавить фильтр</button>
          </div>
          <div className="save-or-cancel">
            <button type="button" className="save">СОХРАНИТЬ</button>
            <button type="button" className="cancel">ОТМЕНИТЬ</button>
          </div>
        </form>
      </div>
  </div>
    );
  }
}
