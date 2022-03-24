import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Checkbox, Spin, notification, Pagination, Tabs, Select } from 'antd';
import HeaderDashboard from '../../../components/header/HeaderDashboard';
import Sidebar from '../../../components/sections/sidebar';
import TableDashboardCategory from '../../../components/tables/DashboardCategory';

import { getAllDashboardCategory, getInactiveDashboardCategory } from '../../../store/DashboardCategory/action';
import HomeCategoryRepository from '../../../repositories/HomeCategoryRepository';
import DashboardCategoryRepository from '../../../repositories/DashboardCategoryRepository';

const Home = (props) => {

    const { TabPane } = Tabs;
    const { Option } = Select;
    const dispatch = useDispatch();
    const valueRef = React.createRef()
    const { auth } = useSelector(({ auth }) => auth);
    const { allDashboardCategory, totalActiveCount, inactiveDashboardCategory, totalInactiveCount } = useSelector(({ DashboardCategory }) => DashboardCategory);

    const [showModal, setShowModal] = useState(false);
    const [masterCategory, setMasterCategory] = useState([]);
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [selectedMasterIds, setSelectedMasterIds] = useState([]);
    const [selectedHomeCatId, setSelectedHomeCatId] = useState('');
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizeTotal, setPageSizeTotal] = useState(10);
    const [tab, setTab] = useState('active');
    const [selectAll, setSelectAll] = useState(false);
    const [selectedHomeCatIds, setSelectedHomeCatIds] = useState([]);
    const [action, setAction] = useState('');
    const [CatDesc, setCatDesc] = useState('0');
    const [posotionChangeCategorys, setPosotionChangeCategorys] = useState([]);
    const [buttonLoader, setBttonLoader] = useState(false);

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
        dispatch(getAllDashboardCategory(ctr));
        dispatch(getInactiveDashboardCategory(ctr));
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [allDashboardCategory, inactiveDashboardCategory]);

    const addModalOnClick = async () => {
        setLoader(true);
        let result = await HomeCategoryRepository.getAllHomeCategory({ _start: 0, _limit: 10000 });
        if (result && result.category && result.category.length > 0) {
            setMasterCategory(result.category);
        }
        setName('');
        setSlug('');
        setPosition('');
        setSelectedMasterIds([]);
        setSelectedHomeCatId('');
        setImage('');
        setLoader(false);
        setShowModal(true);
    }

    const deleteOneDashboardCategory = (data) => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Do you want to delete this DashboardCategory.',
            okText: 'Yes',
            onOk: () => deleteOneCategory(data),
            cancelText: 'No',
        });
    }

    const deleteOneCategory = async (data) => {
        let obj = { "catId": [data.cat_id] };
        await DashboardCategoryRepository.deleteCategory(obj);
        Modal.success({
            title: 'Dashboard Category Deleted Successfully.'
        });
        let ctr = {};
                ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                ctr._limit = pageSizeTotal;
                dispatch(getAllDashboardCategory(ctr));
                dispatch(getInactiveDashboardCategory(ctr));
    }

    const editModalOnClick = async (data) => {
        console.log(data, 'aaa')
        setLoader(true);
        let result = await HomeCategoryRepository.getAllHomeCategory({ _start: 0, _limit: 10000 });
        if (result && result.category && result.category.length > 0) {
            setMasterCategory(result.category);
        }
        setName(data.cat_name);
        setSlug(data.cat_slug);
        setPosition(data.cat_pos);
        setSelectedHomeCatId(data.cat_id);
        setImage(data.cat_image);
        let masterIds = data.master_ids.split(',').map(Number);
        setSelectedMasterIds(masterIds);
        setLoader(false);
        setShowModal(true);
    }

    const closeModalOnClick = () => {
        setName('');
        setSlug('');
        setPosition('');
        setSelectedMasterIds([]);
        setSelectedHomeCatId('');
        setImage('');
        setErrors({});
        setShowModal(false);
    }

    const nameOnChange = (name) => {
        let errorObj = { ...errors };
        let slug = (name).replace(/ /g, "-").toLowerCase();
        errorObj['name'] = '';
        errorObj['slug'] = '';
        setName(name);
        setSlug(slug);
        setErrors(errorObj);
    }

    const slugOnChange = (slug) => {
        let errorObj = { ...errors };
        slug = (slug).replace(/ /g, "-").toLowerCase();
        errorObj['slug'] = '';
        setSlug(slug);
        setErrors(errorObj);
    }

    const positionOnChange = (position) => {
        const re = /^[0-9\b]+$/; //rules
        if (position === "" || re.test(position)) {
            let errorObj = { ...errors };
            errorObj['position'] = '';
            setPosition(position);
            setErrors(errorObj);
        }
    }

    const addImage = () => {
        valueRef.current.click();
    }

    const imageOnChange = async (file) => {
        let errorObj = { ...errors };
        setBttonLoader(true);
        setImage('');
        const formData = new FormData();
        formData.append('dashboard', file);
        let result = await DashboardCategoryRepository.imageUpload(formData);
        if (result && result.statusCode === 200) {
            setImage(result.data);
            setBttonLoader(false);
        }
        errorObj['CatImage'] = '';
        setErrors(errorObj);
    }

    const onMasterSelect = (id) => {
        let selectedMasters = [...selectedMasterIds];
        let index = selectedMasters.indexOf(id);
        if (index >= 0) {
            selectedMasters.splice(index, 1);
        } else {
            selectedMasters.push(id);
        }
        setSelectedMasterIds(selectedMasters);
    }

    const saveOnClick = () => {
        if (selectedHomeCatId) {
            edit();
        } else {
            save();
        }
    }

    const save = async () => {
        if (name && slug && position && selectedMasterIds && image) {
            setLoader(true);
            let obj = {
                "cat_image": image,
                "cat_name": name,
                "cat_slug": slug,
                "cat_pos": position,
                "cat_desc": CatDesc,
                "master_ids": selectedMasterIds
            }
            try {
                await DashboardCategoryRepository.savedashboardCategory(obj);
                notification.success({
                    message: 'Dashboard Category  Added Successfully.'
                });
                let ctr = {};
                ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                ctr._limit = pageSizeTotal;
                dispatch(getAllDashboardCategory(ctr));
                dispatch(getInactiveDashboardCategory(ctr));
                closeModalOnClick();
            } catch (e) {
                notification.error({
                    message: 'Dashboard Category  Added Failed.'
                });
            }
        } else {
            let errorObj = { ...errors };
            if (!name) errorObj['name'] = "Please Enter Title";
            if (!slug) errorObj['slug'] = "Please Enter Slug";
            if (!position) errorObj['position'] = "Please Enter Position";
            if (!image) errorObj['CatImage'] = "Please Select Image";
            setErrors(errorObj);
        }
    }

    const edit = async () => {
        if (name && slug && position && selectedHomeCatId && selectedMasterIds && image) {
            setLoader(true);
            let obj = {
                "cat_image": image,
                "cat_name": name,
                "cat_slug": slug,
                "cat_pos": position,
                "cat_desc": CatDesc,
                "cat_id": selectedHomeCatId,
                "master_ids": selectedMasterIds
            }
            try {
                await DashboardCategoryRepository.editdashboardCategory(selectedHomeCatId, obj);
                notification.success({
                    message: 'Dashboard Category  Updated Successfully.'
                });
                let ctr = {};
                ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                ctr._limit = pageSizeTotal;
                dispatch(getAllDashboardCategory(ctr));
                dispatch(getInactiveDashboardCategory(ctr));
                closeModalOnClick();
            } catch (e) {
                notification.error({
                    message: 'Dashboard Category  Updated Failed.'
                });
            }
        } else {
            let errorObj = { ...errors };
            if (!name) errorObj['name'] = "Please Enter Title";
            if (!slug) errorObj['slug'] = "Please Enter Slug";
            if (!position) errorObj['position'] = "Please Enter Position";
            setErrors(errorObj);
        }
    }

    const pageSizeChange = async (page, pageSize) => {
        setLoader(true);
        let ctr = {};
        ctr._start = page === 1 ? 0 : ((page - 1) * pageSize);
        ctr._limit = pageSize;
        if (tab === "active") {
            dispatch(getAllDashboardCategory(ctr));
        } else {
            dispatch(getInactiveDashboardCategory(ctr));
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
            dispatch(getAllDashboardCategory(ctr));
        } else {
            dispatch(getInactiveDashboardCategory(ctr));
        }
        setCurrentPage(1);
        setPageSizeTotal(10);
        setSelectedHomeCatIds([]);
        setSelectAll(false);
        setAction('');
        setPosotionChangeCategorys([]);
        setTab(tab);
    }

    const onSelectAll = (value) => {
        let array = [];
        if (value) {
            if (tab === 'active') {
                array = allDashboardCategory.map(h => h.cat_id);
            } else {
                array = inactiveDashboardCategory.map(h => h.cat_id);
            }
        }
        setSelectedHomeCatIds(array);
        setSelectAll(value);
    }

    const onSelectOne = (id) => {
        let array = [...selectedHomeCatIds];
        let array1 = tab === 'active' ? [...allDashboardCategory] : [...inactiveDashboardCategory];
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

    const mainPositionOnChange = (id, position) => {
        let array = [...posotionChangeCategorys];
        const re = /^[0-9\b]+$/; //rules
        if (position === "" || re.test(position)) {
            let index = array.findIndex(a => a.catId === id);
            if (index >= 0) {
                array[index]['position'] = position;
            } else {
                array.push({
                    catId: id,
                    position: position
                });
            }
            setPosotionChangeCategorys(array);
        }
    }


    const actionOnChange = (action) => {
        setAction(action);
    }

    const goOnClick = async () => {
        let selectedHomeCatIdsArr = [...selectedHomeCatIds];
        let obj = {
            catId: selectedHomeCatIdsArr
        };
        if (selectedHomeCatIdsArr && selectedHomeCatIdsArr.length > 0 && action) {
            setLoader(true);
            if (action === "active") {
                obj['status'] = 'Y';
                await DashboardCategoryRepository.inactiveCategory(obj);
                notification.success({
                    message: 'Dashboard Category  Updated Successfully.'
                });
            }
            if (action === "inactive") {
                obj['status'] = 'N';
                await DashboardCategoryRepository.inactiveCategory(obj);
                notification.success({
                    message: 'Dashboard Category  Updated Successfully.'
                });
            }
            if (action === "delete") {
                await DashboardCategoryRepository.deleteCategory(obj);
                notification.success({
                    message: 'Dashboard Category  Deleted Successfully.'
                });
            }
            if (action === "position") {
                let array = [...posotionChangeCategorys];
                array = array.filter(a => selectedHomeCatIdsArr.indexOf(a.catId) >= 0);
                await DashboardCategoryRepository.changePosition({ values: array });
                notification.success({
                    message: 'Dashboard Category  Deleted Successfully.'
                });
            }
            setSelectedHomeCatIds([]);
            setPosotionChangeCategorys([]);
            let ctr = {};
            ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr._limit = pageSizeTotal;
            dispatch(getAllDashboardCategory(ctr));
            dispatch(getInactiveDashboardCategory(ctr));
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

    return (
        <div>
            <Spin spinning={loader} tip={'Loading...'}>
                <HeaderDashboard />
                <div className="dashboard-container">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                            <div id="sidebar">
                                <Sidebar page={'Dashboard Category'} />
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
                                                <Option value="position">Position</Option>
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
                                <div style={{ marginTop: 20 }}>
                                    <TableDashboardCategory
                                        allDashboardCategory={tab === "active" ? allDashboardCategory : inactiveDashboardCategory}
                                        editModalOnClick={editModalOnClick}
                                        deleteOneDashboardCategory={deleteOneDashboardCategory}
                                        onSelectAll={onSelectAll}
                                        onSelectOne={onSelectOne}
                                        selectAll={selectAll}
                                        selectedHomeCatIds={selectedHomeCatIds}
                                        mainPositionOnChange={mainPositionOnChange}
                                        posotionChangeCategorys={posotionChangeCategorys}
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
                    title={selectedHomeCatId ? "Edit Dashboard Category " : "Add New Dashboard Category "}
                    width={800}
                    onOk={saveOnClick}
                >
                    <Spin spinning={loader} tip={'Loading...'}>
                        <div className='row'>
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label>Title <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={name}
                                        placeholder=""
                                        onChange={(e) => nameOnChange(e.target.value)}
                                    />
                                    {errors['name'] &&
                                        <span style={{ color: 'red' }}>{errors['name']}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Slug <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={slug}
                                        placeholder=""
                                        onChange={(e) => slugOnChange(e.target.value)}
                                    />
                                    {errors['slug'] &&
                                        <span style={{ color: 'red' }}>{errors['slug']}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Position <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={position}
                                        placeholder=""
                                        onChange={(e) => positionOnChange(e.target.value)}
                                    />
                                    {errors['position'] &&
                                        <span style={{ color: 'red' }}>{errors['position']}</span>
                                    }
                                </div>
                            </div>
                            <div className="col-md-4">
                                {image &&
                                    <div className="form-group">
                                        <label>Logo <span style={{ color: 'red' }}>*</span></label>
                                        <div>
                                            <img
                                                src={image}
                                                onClick={addImage}
                                                style={{ cursor: 'pointer' }}
                                                width={'90%'}
                                                height={200}
                                            />
                                            <input
                                                ref={valueRef}
                                                type="file"
                                                style={{ display: "none" }}
                                                className="mb-1"
                                                accept="image/*"
                                                onChange={(e) => imageOnChange(e.target.files[0])}
                                            />
                                        </div>
                                    </div>
                                }
                                {!image &&
                                    <div className="form-group">
                                        <label>Logo <span style={{ color: 'red' }}>*</span></label>
                                        <Button
                                            style={{ width: '100%', height: 200, borderRadius: 15, border: 'none', backgroundColor: '#ededed' }}
                                            onClick={addImage}
                                            loading={buttonLoader}
                                            size='large'
                                        >
                                            <i
                                                style={!buttonLoader ? { fontSize: 20, fontWeight: 'bold' } : { display: 'none' }}
                                                onClick={addImage}
                                                className="fas fa-plus"
                                            />
                                        </Button>
                                        <input
                                            ref={valueRef}
                                            type="file"
                                            style={{ display: "none" }}
                                            className="mb-1"
                                            accept="image/*"
                                            onChange={(e) => imageOnChange(e.target.files[0])}
                                        />
                                    </div>

                                }
                                {errors['CatImage'] &&
                                    <span style={{ color: 'red' }}>{errors['CatImage']}</span>
                                }
                            </div>
                        </div>
                        <div>
                            <div className="row no-gutters">
                                {masterCategory.map(m => {
                                    return (
                                        <div className="col-lg-4" key={m.exa_cat_id} style={{ padding: 10 }}>
                                            <div className="row no-gutters">
                                                <div className="col-lg-2">
                                                    <Checkbox
                                                        // id={'feat' + obj.cat_id} 
                                                        checked={selectedMasterIds.indexOf(m.exa_cat_id) >= 0}
                                                        onChange={() => onMasterSelect(m.exa_cat_id)}
                                                        value={m.exa_cat_id}
                                                    />
                                                </div>
                                                <div className="col-lg-10">
                                                    <span>{m.exa_cat_name}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Spin>
                </Modal>
            </Spin>
        </div>
    );
};


export default Home;
