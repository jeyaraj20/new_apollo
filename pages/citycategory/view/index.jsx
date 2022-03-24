import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Checkbox, Spin, notification, Pagination, Tabs, Select } from 'antd';
import HeaderDashboard from '../../../components/header/HeaderDashboard';
import Sidebar from '../../../components/sections/sidebar';
import TableCity from '../../../components/tables/City';
import { getAllCity, getInactiveCity } from '../../../store/City/action';
import LocationControllerRepository from '../../../repositories/LocationControllerRepository';

const Home = (props) => {

    const { TabPane } = Tabs;
    const { Option } = Select;
    const dispatch = useDispatch();
    const { auth } = useSelector(({ auth }) => auth);
    const { allCity, totalActiveCount, inactiveCity, totalInactiveCount } = useSelector(({ City }) => City);
    const [showModal, setShowModal] = useState(false);
    const [cityname, setCityname] = useState('');
    const [selectedHomeCatId, setSelectedHomeCatId] = useState('');
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizeTotal, setPageSizeTotal] = useState(10);
    const [tab, setTab] = useState('active');
    const [selectAll, setSelectAll] = useState(false);
    const [selectedHomeCatIds, setSelectedHomeCatIds] = useState([]);
    const [action, setAction] = useState('');
    const [State, setState] = useState('');
    const [Citycode, setCitycode] = useState('');
    const [search, setsearch] = useState('');
    const [stateitems, setStateItems] = useState([]);
    const [stateId, setStateId] = useState([]);
    const [activeState, setactiveState] = useState([]);

    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('persist:QuestionCloudAdmin'));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, [auth]);
    const handleStateChange = (event, value) => {
        console.log(event, "dsa")
        setStateId(event);
    }
    const handleRefresh = async () => {
        const stateresult = await LocationControllerRepository.getState();
        const { state: stateres } = stateresult;
        console.log(stateresult, "result")
        let itemArr = [];
        for (let state of stateres) {
            itemArr.push(<item value={state.state_id}>{state.state_name}</item>)
        }
        console.log(itemArr)
        setStateItems(itemArr);
        setactiveState(itemArr)
        setTimeout(() => {
            setLoader(false)
        }, 1000);
    }
    useEffect(() => {
        setLoader(true);
        async function fetchData() {
            handleRefresh()
        }
        fetchData();
    }, [])

    useEffect(() => {
        setLoader(true);
        let ctr = {};
        ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
        ctr._limit = pageSizeTotal;
        dispatch(getAllCity(ctr));
        dispatch(getInactiveCity(ctr));
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [allCity, inactiveCity]);

    const addModalOnClick = async () => {
        setLoader(true);
        setCitycode('');
        setState('');
        setSelectedHomeCatId('');
        setLoader(false);
        setShowModal(true);
    }

    const editModalOnClick = async (data) => {
        setLoader(true);
        setSelectedHomeCatId(data.city_id);
        setState(data.state);
        setCityname(data.city_name)
        setCitycode(data.city_code)
        setLoader(false);
        setShowModal(true);
    }

    const closeModalOnClick = () => {
        setCityname('');
        setCitycode('');
        setSelectedHomeCatId('');
        setState('');
        setErrors({});
        setShowModal(false);
    }

    const CitynameOnChange = (cityname) => {
        let errorObj = { ...errors };
        errorObj['cityname'] = '';
        setCityname(cityname);
        setErrors(errorObj);
    }
    const CitycodeOnChange = (Citycode) => {
        let errorObj = { ...errors };
        errorObj['Citycode'] = '';
        setCitycode(Citycode);
        setErrors(errorObj);
    }
    const saveOnClick = () => {
        if (selectedHomeCatId) {
            edit();
        } else {
            save();
        }
    }

    const save = async () => {
        if (cityname && Citycode) {
            setLoader(true);
            let obj = {
                "state_id": stateId,
                "city_name": cityname,
                "city_code": Citycode
            }
            try {
                await LocationControllerRepository.saveCity(obj);
                notification.success({
                    message: 'State Added Successfully.'
                })
                let ctr = {};
                ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                ctr._limit = pageSizeTotal;

                if (search) {
                    ctr.search = search;
                }
                dispatch(getAllCity(ctr));
                dispatch(getInactiveCity(ctr));
                closeModalOnClick();
            } catch (e) {
                notification.error({
                    message: 'State Added Failed.'
                });
            }
        } else {
            let errorObj = { ...errors };
            if (!cityname) errorObj['cityname'] = "Please Enter cityname";
            setErrors(errorObj);
        }
    }

    const edit = async () => {
        if (cityname && selectedHomeCatId && Citycode && cityname) {
            setLoader(true);
            let obj = {
                "city_id": selectedHomeCatId,
                "city_name": cityname,
                "city_code": Citycode,
                "state_id": stateId,
            }
            try {
                await LocationControllerRepository.editCity(selectedHomeCatId, obj);
                notification.success({
                    message: 'State Updated Successfully.'
                });
                let ctr = {};
                ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                ctr._limit = pageSizeTotal;
                dispatch(getAllCity(ctr));
                dispatch(getInactiveCity(ctr));
                closeModalOnClick();
            } catch (e) {
                notification.error({
                    message: 'State  Updated Failed.'
                });
            }
        } else {
            let errorObj = { ...errors };
            if (!cityname) errorObj['cityname'] = "Please Enter cityname";
            setErrors(errorObj);
        }
    }

    const searchOnChange = (search) => {
        setLoader(true);
        let ctr = {};
        ctr._start = 0;
        ctr._limit = pageSizeTotal;
        ctr.search = search;
        if (search) {
            ctr.search = search;
        }
        if (tab === 'active') {
            dispatch(getAllCity(ctr));
        } else {
            dispatch(getInactiveCity(ctr));
        }
        setsearch(search);
        setCurrentPage(1);
    }

    const pageSizeChange = async (page, pageSize) => {
        setLoader(true);
        let ctr = {};
        ctr._start = page === 1 ? 0 : ((page - 1) * pageSize);
        ctr._limit = pageSize;

        if (tab === "active") {
            dispatch(getAllCity(ctr));
        } else {
            dispatch(getInactiveCity(ctr));
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
            dispatch(getAllCity(ctr));
        } else {
            dispatch(getInactiveCity(ctr));
        }
        setCurrentPage(1);
        setPageSizeTotal(10);
        setSelectedHomeCatIds([]);
        setSelectAll(false);
        setAction('');
        setsearch('');
        setTab(tab);
    }

    const onSelectAll = (value) => {
        let array = [];
        if (value) {
            if (tab === 'active') {
                array = allCity.map(h => h.city_id);
            } else {
                array = inactiveCity.map(h => h.city_id);
            }
        }
        setSelectedHomeCatIds(array);
        setSelectAll(value);
    }

    const onSelectOne = (id) => {
        let array = [...selectedHomeCatIds];
        let array1 = tab === 'active' ? [...allCity] : [...inactiveCity];
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
        setSelectedHomeCatIds(array);
    }

    const actionOnChange = (action) => {
        setAction(action);
    }

    const goOnClick = async () => {
        let selectedHomeCatIdsArr = [...selectedHomeCatIds];
        let obj = {
            cityId: selectedHomeCatIdsArr
        };
        if (selectedHomeCatIdsArr && selectedHomeCatIdsArr.length > 0 && action) {
            setLoader(true);
            if (action === "active") {
                obj['status'] = 'Y';
                await LocationControllerRepository.inactiveCity(obj);
                notification.success({
                    message: 'State  Updated Successfully.'
                });
            }
            if (action === "inactive") {
                obj['status'] = 'N';
                await LocationControllerRepository.inactiveCity(obj);
                notification.success({
                    message: 'State  Updated Successfully.'
                });
            }
            if (action === "delete") {
                obj['status'] = 'D';
                await LocationControllerRepository.inactiveCity(obj);
                notification.success({
                    message: 'State  Deleted Successfully.'
                });
            }
            setSelectedHomeCatIds([]);
            let ctr = {};
            ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr._limit = pageSizeTotal;

            if (search) {
                ctr.search = search;
            }
            dispatch(getAllCity(ctr));
            dispatch(getInactiveCity(ctr));
        } else {
            if (!action) {
                Modal.error({
                    title: 'Please Select Action'
                });
            } else if (!selectedHomeCatIdsArr.length) {
                Modal.error({
                    title: 'Please Select One Category'
                });
            }
        }
    }
    console.log(stateId, "sdfzxc")
    return (
        <div>
            <Spin spinning={loader} tip={'Loading...'}>
                <HeaderDashboard />
                <div className="dashboard-container">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                            <div id="sidebar">
                                <Sidebar page={'City'} />
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
                                            Go
                                        </button>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <button onClick={addModalOnClick} style={{ backgroundColor: '#80bc00', width: 100, height: 35, color: '#fff', border: 'none' }}>
                                            <i className="fas fa-plus" /> Add
                                        </button>
                                    </div>

                                </div>
                                <div className='row'>
                                    <div className="col-md-6">
                                        <div className="form-group ">
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={search}
                                                placeholder="search"
                                                onChange={(e) => searchOnChange(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: 20 }}>
                                    <TableCity
                                        allCity={tab === "active" ? allCity : inactiveCity}
                                        editModalOnClick={editModalOnClick}
                                        onSelectAll={onSelectAll}
                                        onSelectOne={onSelectOne}
                                        selectAll={selectAll}
                                        selectedHomeCatIds={selectedHomeCatIds}
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
                    title={selectedHomeCatId ? "Edit Announcements " : "Add New Announcements "}
                    width={800}
                    onOk={saveOnClick}
                >
                    <Spin spinning={loader} tip={'Loading...'}>
                        <div className='row'>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>State <span style={{ color: 'red' }}>*</span></label>
                                    <Select
                                        onChange={handleStateChange}
                                        placeholder="Select Action"
                                        className="ps-ant-dropdown"
                                        style={{ width: '100%' }}
                                        value={stateId}
                                        defaultValue={State}
                                        showSearch={true}
                                        filterOption={(input, option) =>
                                            option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="">Select State</Option>

                                        {activeState.map(m => {
                                            console.log(activeState, "activeState")
                                            return (
                                                <Option value={m.props.value} key={m.state_id}>{m.props.children}</Option>
                                            )
                                        })}
                                    </Select>
                                    {errors['mainCatId'] &&
                                        <span style={{ color: 'red' }}>{errors['mainCatId']}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>City Name <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={cityname}
                                        placeholder=""
                                        onChange={(e) => CitynameOnChange(e.target.value)}
                                    />
                                    {errors['cityname'] &&
                                        <span style={{ color: 'red' }}>{errors['cityname']}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>City Code <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={Citycode}
                                        placeholder=""
                                        onChange={(e) => CitycodeOnChange(e.target.value)}
                                    />
                                    {errors['Citycode'] &&
                                        <span style={{ color: 'red' }}>{errors['Citycode']}</span>
                                    }
                                </div>
                            </div>
                        </div>

                    </Spin>
                </Modal>
            </Spin>
        </div>
    );
};


export default Home;
