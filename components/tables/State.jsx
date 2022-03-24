import React from 'react';
import { Checkbox, Table } from 'antd';

const TableState= ({ allState, editModalOnClick,deleteOneState, onSelectAll, onSelectOne, selectAll, selectedHomeCatIds }) => {
  const columns = [
  
    {
      title: 'Country Name',
      dataIndex: 'CountryName',
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
  
  let data = allState.map(a => {
    let obj = {
      key: a.state_id,
      CountryName:a.country,
      StateName:a.state_name,
      edit: (<i className="fas fa-pen" onClick={() => editModalOnClick(a)} style={{ cursor: 'pointer' }}></i>),
      delete : (<i className="fa fa-trash" onClick={() => deleteOneState(a)} style={{cursor: 'pointer'}}></i>),

      check: (
        <Checkbox
          onClick={() => onSelectOne(a.state_id)}
          checked={selectedHomeCatIds.indexOf(a.state_id) >= 0}
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
