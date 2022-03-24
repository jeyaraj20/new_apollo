import React from 'react';
import { Checkbox, Table } from 'antd';
import Moment from "moment";

const TableCoupon = ({ allCoupon, editModalOnClick,deleteOneCoupon, onSelectAll, onSelectOne, selectAll, selectedCouponId }) => {
  const columns = [
    {
      title: 'CouponName',
      dataIndex: 'couponName',
    },
    {
      title: 'CouponCode',
      dataIndex: 'couponCode',
    },
    {
      title: 'CouponValue',
      dataIndex: 'coupon_value',
    },
    {
      title: 'No.ofUsage',
      dataIndex: 'no_of_usage',
    },
    {
      title: 'Type',
      dataIndex: 'coupon_value_type',
    },
    {
      title: 'FromDate',
      dataIndex: 'from_date',
      format:'DD-MM-YYYY'
    },
    {
      title: 'ExpiryDate',
      dataIndex: 'to_date',
      format:'DD-MM-YYYY'
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
   
  let data = allCoupon.map((a) => {
    let obj = {
      key: a.coupon_id,
      couponName: a.coupon_name,
      couponCode:a.coupon_code,
      coupon_value:a.coupon_value,
      no_of_usage:a.no_of_usage,
      coupon_value_type:a.coupon_value_type,
      from_date: Moment(a.from_date).format('DD-MM-YYYY'),
      to_date:Moment(a.to_date).format('DD-MM-YYYY'),
      edit: (<i className="fas fa-pen" onClick={() => editModalOnClick(a)} style={{ cursor: 'pointer' }}></i>),
      delete : (<i className="fa fa-trash" onClick={() => deleteOneCoupon(a)} style={{cursor: 'pointer'}}></i>),
      check: (
        <Checkbox
          onClick={() => onSelectOne(a.coupon_id)}
          checked={selectedCouponId.indexOf(a.coupon_id) >= 0}
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


export default TableCoupon;
