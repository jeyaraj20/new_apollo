import React from 'react';
import { Checkbox, Table } from 'antd';

const TableState= ({ allCity, editModalOnClick,deleteOneState, onSelectAll, onSelectOne, selectAll, selectedHomeCatIds }) => {
  const columns = [
  
    {
      title: 'City Name',
      dataIndex: 'cityname',
    },
    {
      title: 'State Name',
      dataIndex: 'StateName',
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
    },
    {
      title: <Checkbox checked={selectAll} onClick={(e) => onSelectAll(e.target.checked)}></Checkbox>,
      dataIndex: 'check'
    }
  ];
  
  let data = allCity.map(a => {
    let obj = {
      key: a.city_id,
      cityname:a.city_name,
      StateName:a.state,
      edit: (<i className="fas fa-pen" onClick={() => editModalOnClick(a)} style={{ cursor: 'pointer' }}></i>),
      delete : (<i className="fa fa-trash" onClick={() => deleteOneState(a)} style={{cursor: 'pointer'}}></i>),

      check: (
        <Checkbox
          onClick={() => onSelectOne(a.city_id)}
          checked={selectedHomeCatIds.indexOf(a.city_id) >= 0}
        />
      )
    }
    return (obj);
  });

  return (
    <div>
      <div>
        <Table columns={columns} dataSource={data} pagination={false} bordered />
      </div>
    </div>
  );
};

export default TableState;
