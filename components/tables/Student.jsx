import React from 'react';
import { Checkbox, Table } from 'antd';

const TableStudent = ({ allStudent, editModalOnClick, openview, onSelectAll, onSelectOne, selectAll, selectedStudentId }) => {
  const columns = [
    {
      title: 'Register Number',
      dataIndex: 'stud_regno',
    },
    {
      title: 'Name',
      dataIndex: 'stud_fname',
    },
    {
      title: 'Email',
      dataIndex: 'stud_email',
    },
    {
      title: 'Mobile',
      dataIndex: 'stud_mobile',
    },
    {
      title: 'Register Date',
      dataIndex: 'stud_date',
    },
    {
      title: '	Password',
      dataIndex: 'stud_pass',
    },
    {
      title: '	Gender',
      dataIndex: 'stud_gender',
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
    },
    {
      title: 'view',
      dataIndex: 'view',
    },
    {
      title: <Checkbox checked={selectAll} onClick={(e) => onSelectAll(e.target.checked)}></Checkbox>,
      dataIndex: 'check'
    }
  ];

  let data = allStudent.map((a) => {

    let obj = {

      key: a.stud_id,
      stud_regno: a.stud_regno,
      stud_fname: a.stud_fname,
      stud_email: a.stud_email,
      stud_mobile: a.stud_mobile,
      stud_date: a.stud_date,
      stud_pass: new Buffer(a.stud_pass, 'base64').toString(),
      stud_gender: a.stud_gender,

      edit: (<i className="fas fa-pen" onClick={() => editModalOnClick(a)} style={{ cursor: 'pointer' }}></i>),
      view: (<i className="fas fa-file" onClick={() => openview(a)} style={{ cursor: 'pointer' }}></i>),
      check: (
        <Checkbox
          onClick={() => onSelectOne(a.stud_id)}
          checked={selectedStudentId.indexOf(a.stud_id) >= 0}
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


export default TableStudent;
