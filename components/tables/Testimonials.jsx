import React from 'react';
import { Checkbox, Table } from 'antd';

const TableTestimonials= ({ allTestimonials, editModalOnClick,deleteOnetestimonials, onSelectAll, onSelectOne, selectAll, selectedHomeCatIds, mainPositionOnChange, posotionChangeCategorys }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Content',
      dataIndex: 'content',
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
  
  let data = allTestimonials.map(a => {
    let position = posotionChangeCategorys.filter(p => p.catId === a.testimonials_id);
    let obj = {
      name:a.testimonials_name,
      key: a.testimonials_id,
      content: a.testimonials_content,
      position: (
        <input
          type="text"
          onChange={event => mainPositionOnChange(a.testimonials_id, event.target.value)}
          style={{ width: '50px', textAlign: 'center', padding: '0px' }}
          value={position && position.length > 0 ? position[0].position : a.testimonials_pos}
          className="form-control form-control-lg"
        />
      ),
      edit: (<i className="fas fa-pen" onClick={() => editModalOnClick(a)} style={{ cursor: 'pointer' }}></i>),
      delete : (<i className="fa fa-trash" onClick={() => deleteOnetestimonials(a)} style={{cursor: 'pointer'}}></i>),

      check: (
        <Checkbox
          onClick={() => onSelectOne(a.testimonials_id)}
          checked={selectedHomeCatIds.indexOf(a.testimonials_id) >= 0}
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

export default TableTestimonials;
