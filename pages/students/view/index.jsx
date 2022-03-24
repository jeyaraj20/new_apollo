import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Checkbox, Spin, notification, Pagination, Tabs, Select } from 'antd';
import HeaderDashboard from '../../../components/header/HeaderDashboard';
import Sidebar from '../../../components/sections/sidebar';
import TableStudent from '../../../components/tables/Student';
import ExamMainCategoryRepository from '../../../repositories/ExamMainCategoryRepository';
import { DatePicker } from '@material-ui/pickers';

import { getAllStudent, getInactiveStudent } from '../../../store/Student/action';
import StudentRepository from '../../../repositories/StudentRepository';
import Moment from "moment";
var fileDownload = require('js-file-download');
const Home = (props) => {

    const { TabPane } = Tabs;
    const { Option } = Select;
    const dispatch = useDispatch();
    const valueRef = React.createRef()
    const [data, setData] = useState([])
    const { auth } = useSelector(({ auth }) => auth);
    const { allStudent, totalActiveCount, inactiveStudent, totalInactiveCount } = useSelector(({ Student }) => Student);
    const [viewmodal, setViewModal] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizeTotal, setPageSizeTotal] = useState(10);
    const [tab, setTab] = useState('active');
    const [selectAll, setSelectAll] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState([]);
    const [action, setAction] = useState('');
    const [studname, setStudName] = useState('');
    const [studlname, setStudLName] = useState('');
    const [studfname, setFName] = useState('');
    const [studpass, setPass] = useState('');
    const [studregno, setRegno] = useState('');
    const [studemail, setEmail] = useState('');
    const [ipaddress, setIp] = useState(0);
    const [studmobile, setMobile] = useState('');
    const [mobotp, setOtp] = useState('');
    const [studgender, setGender] = useState('');
    const [pincode, setPincode] = useState('');
    const [studdate, setDate] = useState('');
    const [studstatus, setStatus] = useState('');
    const [Country, setCountry] = useState('');
    const [State, setState] = useState('');
    const [City, setCity] = useState('');
    const [categoryitems, setCategoryItems] = useState([]);
    const [mainCategoryitems, setMainCategoryItems] = useState([]);
    const [masterCategoryId, setMasterCategoryId] = useState(0);
    const [mainCategoryId, setMainCategoryId] = useState(0);
    const [selectedStartDate, setStartDateChange] = useState(Moment().format('YYYY-MM-DD'));
    const [selectedEndDate, setEndDateChange] = useState(Moment().format('YYYY-MM-DD'));
    const [StudId, setStudId] = useState('');

    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('persist:QuestionCloudAdmin'));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, [auth]);

    useEffect(() => {
        setLoader(true);
        let ctr = {};
        ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
        ctr._limit = pageSizeTotal;
        dispatch(getAllStudent(ctr));
        dispatch(getInactiveStudent(ctr));
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [allStudent, inactiveStudent]);

    const addModalOnClick = async () => {
        setLoader(true);
        setStudLName('');
        setEmail('');
        setFName('');
        setLoader(false);
        setShowModal(true);
    }

    const editModalOnClick = async (data) => {
        setLoader(true);
        setFName(data.stud_fname);
        setStudName(data.stud_name);
        setStudLName(data.stud_lname);
        setStudId(data.stud_id);
        setRegno(data.stud_regno)
        setEmail(data.stud_email)
        setMobile(data.stud_mobile)
        setOtp(data.mob_otp)
        setPass(data.stud_pass)
        setGender(data.stud_gender)
        setPincode(data.pincode)
        setDate(Moment(data.stud_date).format('DD-MM-YYYY HH:mm:ss'))
        setIp(data.ipaddress)
        setStatus(data.stud_status)
        setMasterCategoryId(data.category_id);
        setMainCategoryId(data.main_category_id ? data.main_category_id : '');
        setLoader(false);
        setShowModal(true);
    }


    const closeModalOnClick = () => {
        setStudName('');
        setStudLName('');
        setStudId('');
        setRegno('')
        setEmail('')
        setMobile('')
        setOtp('')
        setPass('')
        setGender('')
        setPincode('')
        setDate('')
        setIp('')
        setStatus('')
        setMasterCategoryId('')
        setMainCategoryId('')
        setErrors({});
        setShowModal(false);
    }

    const closeViewOnClick = () => {
        setStudName('');
        setStudLName('');
        setStudId('');
        setRegno('')
        setEmail('')
        setMobile('')
        setOtp('')
        setPass('')
        setGender('')
        setPincode('')
        setDate('')
        setIp('')
        setStatus('')
        setCountry('')
        setState('')
        setCity('')
        setFName('')
        setMasterCategoryId('')
        setMainCategoryId('')
        setErrors({});
        setViewModal(false);
    }

    const handleMasterCategoryChange = async (target, value) => {
        let data = await ExamMainCategoryRepository.getExamSubCategoryById(target.value);
        if (data && data.category && data.category.length > 0) {
            setMainCategoryItems(data.category);
        }

        let errorObj = { ...errors };
        errorObj['masterCategoryId'] = '';
        setMasterCategoryId(target.value);
        setMainCategoryId('');
        setErrors(errorObj);
    }

    const handleMainCategoryChange = (mainCategoryId) => {
        let errorObj = { ...errors };
        errorObj['mainCategoryId'] = '';
        setMainCategoryId(mainCategoryId);
        setErrors(errorObj);
    }


    const studemailOnChange = (studemail) => {
        let errorObj = { ...errors };
        errorObj['studemail'] = '';
        setEmail(studemail);
        setErrors(errorObj);
    }

    const studfnameOnChange = (studfname) => {
        let errorObj = { ...errors };
        errorObj['studfname'] = '';
        setFName(studfname);
        setErrors(errorObj);

    }
    const studlnameOnChange = (studlname) => {
        let errorObj = { ...errors };
        errorObj['studlname'] = '';
        setStudLName(studlname);
        setErrors(errorObj);

    };

    const studregnoOnChange = (studregno) => {
        let errorObj = { ...errors };
        errorObj['studregno'] = '';
        setRegno(studregno);
        setErrors(errorObj);

    }

    const studmobileOnChange = (studmobile) => {
        let errorObj = { ...errors };
        errorObj['studmobile'] = '';
        setMobile(studmobile);
        setErrors(errorObj);

    }

    const GenderOnChange = (studgender) => {
        let errorObj = { ...errors };
        errorObj['studgender'] = '';
        setGender(studgender);
        setErrors(errorObj);

    }

    const saveOnClick = () => {
        if (StudId) {
            edit();
        } else {
            save();
        }
    }

    const handleStartDateChange = (date) => {
        if (date === null) {
            setStartDateChange(null);
        } else if (selectedEndDate) {
            if (new Date(date).getTime() > new Date(selectedEndDate + ' 00:00:00').getTime()) {
                setEndDateChange(null);
            } else {
                let fromdate = Moment(date).format('YYYY-MM-DD');
                setStartDateChange(fromdate);
            }
        } else {
            let fromdate = Moment(date).format('YYYY-MM-DD');
            setStartDateChange(fromdate);
        }

    }

    const handleEndDateChange = (date) => {
        if (date === null) {
            setEndDateChange(null);
        } else if (selectedStartDate) {
            if (new Date(selectedStartDate + ' 00:00:00').getTime() > new Date(date).getTime()) {
                setEndDateChange(null);
            } else {
                let fromdate = Moment(date).format('YYYY-MM-DD');
                setEndDateChange(fromdate);
            }
        } else {
            let fromdate = Moment(date).format('YYYY-MM-DD');
            setEndDateChange(fromdate);
        }
    }

    const searchOnClick = async () => {
        setLoader(true);
        const { data: activeres } = dispatch(getAllStudent(selectedStartDate, selectedEndDate));
        const { activedata } = activeres;
        setData(activedata);
    }

    const downloadOnClick = async () => {
        setLoader(true);
        const result = await StudentRepository.downloadStudentReport("Y", selectedStartDate, selectedEndDate);
        fileDownload(result, 'Report.xls');
        setLoader(false)
    }
    const openview = (open, data) => {
        if (open) {
            setLoader(true);
            setStudName(open.stud_name);
            setStudLName(open.stud_lname);
            setFName(open.stud_fname);
            setStudId(open.stud_id);
            setRegno(open.stud_regno)
            setEmail(open.stud_email)
            setMobile(open.stud_mobile)
            setOtp(open.mob_otp)
            setPass(open.stud_pass)
            setGender(open.stud_gender)
            setPincode(open.pincode)
            setDate(Moment(open.stud_date).format('DD-MM-YYYY HH:mm:ss'))
            setIp(open.ipaddress)
            setStatus(open.stud_status)
            setMasterCategoryId(open.category_id);
            setMainCategoryId(open.main_category_id ? open.main_category_id : '');
            setCountry(open.country_id)
            setState(open.state_id)
            setCity(open.city_id)
            setLoader(false);
        }
        setViewModal(open);
    }

    const save = async () => {
        if (studregno && studfname && studlname && studemail && studmobile) {
            setLoader(true);
            let obj = {
                'category_id': masterCategoryId,
                'main_category_id': mainCategoryId,
                'stud_fname': studfname,
                'stud_lname': studlname,
                'stud_regno': studregno,
                'stud_email': studemail,
                'stud_mobile': studmobile,
                'ipaddress': ipaddress,
            }
            if (studgender) obj['stud_gender'] = studgender;
            try {
                await StudentRepository.saveStudent(obj);
                notification.success({
                    message: 'Coupon  Added Successfully.'
                });
                let ctr = {};
                ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                ctr._limit = pageSizeTotal;
                dispatch(getAllStudent(ctr));
                dispatch(getInactiveStudent(ctr));
                closeModalOnClick();
            } catch (e) {
                notification.error({
                    message: 'Coupon  Added Failed.'
                });
            }
        } else {
            let errorObj = { ...errors };
            if (!studlname) errorObj['studlname'] = "Please Enter CouponName";
            if (!studemail) errorObj['studemail'] = "Please Enter studemail";
            if (!studfname) errorObj['studfname'] = "Please Enter studfname";
            setErrors(errorObj);
        }
    }

    const edit = async () => {
        if (studregno && studfname && studlname && studemail && studmobile && StudId) {
            setLoader(true);
            let obj = {
                'stud_id': StudId,
                'category_id': masterCategoryId,
                'main_category_id': mainCategoryId,
                'stud_fname': studfname,
                'stud_lname': studlname,
                'stud_regno': studregno,
                'stud_email': studemail,
                'stud_mobile': studmobile,
                'ipaddress': ipaddress,
                'stud_gender': studgender,
            }
            try {
                await StudentRepository.updateStudent(StudId, obj);
                notification.success({
                    message: 'Updated Successfully.'
                });
                let ctr = {};
                ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                ctr._limit = pageSizeTotal;
                dispatch(getAllStudent(ctr));
                dispatch(getInactiveStudent(ctr));
                closeModalOnClick();
            } catch (e) {
                notification.error({
                    message: 'Updated Failed.'
                });
            }
        } else {
            let errorObj = { ...errors };
            if (!studlname) errorObj['studlname'] = "Please Enter CouponName";
            if (!studemail) errorObj['studemail'] = "Please Enter studemail";
            if (!studfname) errorObj['studfname'] = "Please Enter studfname";
            setErrors(errorObj);
        }
    }

    const pageSizeChange = async (page, pageSize) => {
        setLoader(true);
        let ctr = {};
        ctr._start = page === 1 ? 0 : ((page - 1) * pageSize);
        ctr._limit = pageSize;
        if (tab === "active") {
            dispatch(getAllStudent(ctr));
            ;
        } else {
            dispatch(getInactiveStudent(ctr))
        }
        setCurrentPage(page);
        setPageSizeTotal(pageSize);
    }

    const changeTab = (tab) => {
        setLoader(true);
        let ctr = {};
        ctr._start = 0;
        ctr._limit = 10;
        if (tab === "active") {
            dispatch(getAllStudent(ctr));
        } else {
            dispatch(getInactiveStudent(ctr))
        }
        setCurrentPage(1);
        setPageSizeTotal(10);
        setSelectedStudentId([]);
        setSelectAll(false);
        setAction('');
        setTab(tab);
    }

    const onSelectAll = (value) => {
        let array = [];
        if (value) {
            if (tab === 'active') {
                array = allStudent.map(h => h.stud_id);
            } else {
                array = inactiveStudent.map(h => h.stud_id);
            }
        }
        setSelectedStudentId(array);
        setSelectAll(value);
    }

    const onSelectOne = (id) => {
        let array = [...selectedStudentId];
        let array1 = tab === 'active' ? [...allStudent] : [...inactiveStudent];
        let index = array.indexOf(id);
        if (index >= 0) {
            array.splice(index, 1);
        } else {
            array.push(id);
        }
        if (array.length === array1.length) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }
        setSelectedStudentId(array);
    }

    const actionOnChange = (action) => {
        setAction(action);
    }

    const goOnClick = async () => {
        let selectedStudentIdArr = [...selectedStudentId];
        let obj = {
            stud_id: selectedStudentIdArr
        };
        if (selectedStudentIdArr && selectedStudentIdArr.length > 0 && action) {
            setLoader(true);
            if (action === "active") {
                obj['status'] = 'Y';
                await StudentRepository.changeStatus(obj);
                notification.success({
                    message: ' Updated Successfully.'
                });
            }
            if (action === "inactive") {
                obj['status'] = 'N';
                await StudentRepository.changeStatus(obj);
                notification.success({
                    message: ' Updated Successfully.'
                });
            }
            if (action === "delete") {
                obj['status'] = 'D';
                await StudentRepository.deleteStudent(obj);
                notification.success({
                    message: ' Deleted Successfully.'
                });
            }

            setSelectedStudentId([]);
            let ctr = {};
            ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr._limit = pageSizeTotal;
            dispatch(getAllStudent(ctr));
            dispatch(getInactiveStudent(ctr));
        } else {
            if (!action) {
                Modal.error({
                    title: 'Please Select Action'
                });
            } else if (!selectedStudentIdArr
                .length) {
                Modal.error({
                    title: 'Please Select One Category'
                });
            }
        }
    }

    return (
        <div>

            {<Spin spinning={loader} tip={'Loading...'}>
                <HeaderDashboard />
                <div className="dashboard-container">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                            <div id="sidebar">
                                <Sidebar page={'Students'} />
                            </div>

                        </div>
                        <div className="col-md-10">
                            <div className="content content-width" id="style-2">
                                <Tabs defaultActiveKey={tab} onChange={changeTab}>
                                    <TabPane tab={`Active ${totalActiveCount}`} key="active">
                                    </TabPane>
                                    <TabPane tab={`Inactive ${totalInactiveCount}`} key="inactive">
                                    </TabPane>
                                </Tabs>
                                <div className='row'>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <Select
                                                onChange={actionOnChange}
                                                placeholder="Select Action"
                                                className="ps-ant-dropdown"
                                                style={{ width: 200 }}
                                                value={action}
                                            >
                                                {tab === 'active' && <Option value="inactive">Inactive</Option>}
                                                {tab === 'inactive' && <Option value="active">Active</Option>}
                                                <Option value="delete">Delete</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button onClick={goOnClick} style={{ backgroundColor: '#cd4040', width: 100, height: 35, color: '#fff', border: 'none' }}>
                                            <i className="fa fa-bolt" />  Go
                                        </button>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <button onClick={addModalOnClick} style={{ backgroundColor: '#80bc00', width: 100, height: 35, color: '#fff', border: 'none' }}>
                                            <i className="fas fa-plus" /> Add
                                        </button>
                                    </div>
                                </div>
                                <div class="row" style={{ padding: 10, textAlign: 'center', justifyContent: 'center' }}>
                                    <div className="col-lg-3">
                                        <label>Start Date</label>
                                        <input
                                            className="form-control"
                                            type="date"
                                            value={selectedStartDate}
                                            placeholder=""
                                            onChange={handleStartDateChange}
                                        />
                                    </div>
                                    <div className="col-lg-3">
                                        <label>End Date </label>
                                        <input
                                            className="form-control"
                                            type="date"
                                            value={selectedEndDate}
                                            placeholder=""
                                            onChange={handleEndDateChange}
                                        />
                                        {errors['studfname'] &&
                                            <span style={{ color: 'red' }}>{errors['studfname']}</span>
                                        }
                                    </div>
                                    <div class="col-lg-2" style={{ marginTop: 20 }}>
                                        <Button onClick={searchOnClick} variant="contained" color="primary" className="jr-btn bg-success text-white">
                                            <i className="fa fa-search" />
                                            <span>Search</span>
                                        </Button>
                                    </div>
                                    <div class="col-lg-2" style={{ marginTop: 20 }}>
                                        <Button onClick={downloadOnClick} variant="contained" color="primary" className="jr-btn">
                                            <i className="fas fa-download" />
                                            <span>Download</span>
                                        </Button>
                                    </div>
                                </div>
                                <div style={{ marginTop: 20 }}>
                                    <TableStudent
                                        allStudent={tab === "active" ? allStudent : inactiveStudent}
                                        editModalOnClick={editModalOnClick}
                                        openview={openview}
                                        onSelectAll={onSelectAll}
                                        onSelectOne={onSelectOne}
                                        selectAll={selectAll}
                                        selectedStudentId={selectedStudentId}
                                    />
                                </div>
                                <div style={totalActiveCount > 0 ? { margin: '10px auto', textAlign: 'right' } : { display: 'none' }}>
                                    <Pagination
                                        total={tab === "active" ? totalActiveCount : totalInactiveCount}
                                        defaultCurrent={1}
                                        current={currentPage}
                                        defaultPageSize={10}
                                        pageSize={pageSizeTotal}
                                        pageSizeOptions={['10', '20', '30']}
                                        onChange={pageSizeChange}
                                        showSizeChanger={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    visible={showModal}
                    okText={'Save'}
                    onCancel={closeModalOnClick}
                    title={StudId ? "Edit Students " : "Add New Students "}
                    width={800}
                    onOk={saveOnClick}
                >
                    <Spin spinning={loader} tip={'Loading...'}>
                        <div className='row'>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Master Category <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={masterCategoryId}
                                        placeholder=""
                                        onChange={(e) => handleMasterCategoryChange(e.target.value)}

                                    />
                                    {errors['masterCategoryId'] &&
                                        <span style={{ color: 'red' }}>{errors['masterCategoryId']}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Main Category <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder=""
                                        onChange={(e) => handleMainCategoryChange(e.target.value)}
                                        value={mainCategoryId} />
                                    {mainCategoryitems && mainCategoryitems.length > 0 &&
                                        mainCategoryitems.map(main => {
                                            return (
                                                value = main.exa_cat_id,
                                                key = main.exa_cat_id,
                                                main.exa_cat_name
                                            )
                                        })
                                    }
                                    {errors['mainCategoryId'] &&
                                        <span style={{ color: 'red' }}>{errors['mainCategoryId']}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Reg No<span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={studregno}
                                        placeholder=""
                                        onChange={(e) => studregnoOnChange(e.target.value)}

                                    />
                                    {errors['studregno'] &&
                                        <span style={{ color: 'red' }}>{errors['studregno']}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>First Name <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={studfname}
                                        placeholder=""
                                        onChange={(e) => studfnameOnChange(e.target.value)}
                                    />
                                    {errors['studfname'] &&
                                        <span style={{ color: 'red' }}>{errors['studfname']}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Last Name <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={studlname}
                                        placeholder=""
                                        onChange={(e) => studlnameOnChange(e.target.value)}
                                    />
                                    {errors['studlname'] &&
                                        <span style={{ color: 'red' }}>{errors['studlname']}</span>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Email <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={studemail}
                                        placeholder=""
                                        onChange={(e) => studemailOnChange(e.target.value)}
                                    />
                                    {errors['studemail'] &&
                                        <span style={{ color: 'red' }}>{errors['studemail']}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Mobile No<span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={studmobile}
                                        placeholder=""
                                        onChange={(e) => studmobileOnChange(e.target.value)}
                                    />
                                    {errors['studmobile'] &&
                                        <span style={{ color: 'red' }}>{errors['studmobile']}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Gender <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={studgender}
                                        placeholder=""
                                        onChange={(e) => GenderOnChange(e.target.value)}
                                    />
                                    {errors['studgender'] &&
                                        <span style={{ color: 'red' }}>{errors['studgender']}</span>
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </Spin>
                </Modal>
                <Modal visible={viewmodal}
                    onCancel={closeViewOnClick}
                    title={StudId ? " Students " : "Viwe Students "}
                    width={800}
                >
                    <Spin spinning={loader} tip={'Loading...'}>
                        <div className='row'>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Student Name</label>
                                    <input className="form-control" type="text" value={studfname} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input className="form-control" type="text" value={studemail} />
                                </div>
                                <div className="form-group">
                                    <label>Reg No</label>
                                    <input className="form-control" type="text" value={studregno} />
                                </div>
                                <div className="form-group">
                                    <label>Student Password</label>
                                    <input className="form-control" type="text" value={studpass} />
                                </div>
                                <div className="form-group">
                                    <label>Mobile No</label>
                                    <input className="form-control" type="text" value={studmobile} />
                                </div>
                                <div className="form-group">
                                    <label>Mobile OTP</label>
                                    <input className="form-control" type="text" value={mobotp} />
                                </div>
                                <div className="form-group">
                                    <label>Student Gender</label>
                                    <input className="form-control" type="text" value={studgender} />
                                </div>
                                <div className="form-group">
                                    <label>Country</label>
                                    <input className="form-control" type="text" value={Country} />
                                </div>
                                <div className="form-group">
                                    <label>State</label>
                                    <input className="form-control" type="text" value={State} />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input className="form-control" type="text" value={City} />
                                </div>
                                <div className="form-group">
                                    <label>Pincode</label>
                                    <input className="form-control" type="text" value={pincode} />
                                </div>
                                <div className="form-group">
                                    <label>Date</label>
                                    <input className="form-control" type="text" value={studdate} />
                                </div>
                                <div className="form-group">
                                    <label>IpAddress</label>
                                    <input className="form-control" type="text" value={ipaddress} />
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <input className="form-control" type="text" value={studstatus} />
                                </div>
                            </div>
                        </div>
                    </Spin>
                </Modal>
            </Spin>}
        </div>
    );
};


export default Home;




