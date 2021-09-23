import React from 'react'
import MainLayot from '../../components/layots/Main'
import { Table, Tag, Space } from 'antd';

function Enter(props:any) {
    const dataSource = props.post.arr.map((e:any)=>({id: e.id,title:e.title}));
      console.log(dataSource,"dataSource")
      const columns = [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        }
        
      ];
    return (
        <div className="Enter">
            <MainLayot>
            <Table dataSource={dataSource} columns={columns} />;
            </MainLayot>
           
        </div>
    )
}

export default Enter
