import React from 'react';
import { Checkbox, Table } from 'antd';

const TableAnnouncements= ({ allAnnouncements, editModalOnClick,deleteOneAnnouncements, onSelectAll, onSelectOne, selectAll, selectedHomeCatIds, mainPositionOnChange, posotionChangeCategorys }) => {
  const columns = [
  
    {
      title: 'Announcements',
      dataIndex: 'Announcements',
    },
    {
      title: 'Position',
      dataIndex: 'position',
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
  
  let data = allAnnouncements.map(a => {
    let position = posotionChangeCategorys.filter(p => p.AnnouncementsId === a.Announcements_id);
    let obj = {
      key: a.Announcements_id,
      Announcements: a.Announcements,
      position: (
        <input
          type="text"
          onChange={event => mainPositionOnChange(a.Announcements_id, event.target.value)}
          style={{ width: '50px', textAlign: 'center', padding: '0px' }}
          value={position && position.length > 0 ? position[0].position : a.Announcements_pos}
          className="form-control form-control-lg"
        />
      ),
      edit: (<i className="fas fa-pen" onClick={() => editModalOnClick(a)} style={{ cursor: 'pointer' }}></i>),
      delete : (<i className="fa fa-trash" onClick={() => deleteOneAnnouncements(a)} style={{cursor: 'pointer'}}></i>),

      check: (
        <Checkbox
          onClick={() => onSelectOne(a.Announcements_id)}
          checked={selectedHomeCatIds.indexOf(a.Announcements_id) >= 0}
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

export default TableAnnouncements;
