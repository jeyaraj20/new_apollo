import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Checkbox, Spin, notification, Pagination, Tabs, Select } from 'antd';
import HeaderDashboard from '../../../components/header/HeaderDashboard';
import Sidebar from '../../../components/sections/sidebar';
import TableTestimonials from '../../../components/tables/Testimonials';
import { getAllTestimonials, getInactiveTestimonials } from '../../../store/Testimonials/action';
import TestimonialsRepository from '../../../repositories/TestimonialsRepository';

const Home = (props) => {

    const { TabPane } = Tabs;
    const { Option } = Select;
    const dispatch = useDispatch();
    const valueRef = React.createRef()
    const { auth } = useSelector(({ auth }) => auth);
    const { allTestimonials, totalActiveCount, inactiveTestimonials, totalInactiveCount } = useSelector(({ Testimonials }) => Testimonials);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [selectedHomeCatId, setSelectedHomeCatId] = useState('');
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizeTotal, setPageSizeTotal] = useState(10);
    const [tab, setTab] = useState('active');
    const [selectAll, setSelectAll] = useState(false);
    const [selectedHomeCatIds, setSelectedHomeCatIds] = useState([]);
    const [action, setAction] = useState('');
    const [Content, setContent] = useState('');
    const [Designation, setDesignation] = useState('')
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
        dispatch(getAllTestimonials(ctr));
        dispatch(getInactiveTestimonials(ctr));
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [allTestimonials, inactiveTestimonials]);

    const addModalOnClick = async () => {
        setLoader(true);
        setName('');
        setPosition('');
        setSelectedHomeCatId('');
        setImage('');
        setLoader(false);
        setShowModal(true);
    }

    const deleteOnetestimonials = (data) => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Do you want to delete this Testimonials.',
            okText: 'Yes',
            onOk: () => deleteOneCategory(data),
            cancelText: 'No',
        });
    }

    const deleteOneCategory = async (data) => {
        let obj = { "catId": [data.testimonials_id] };
        await TestimonialsRepository.deleteCategory(obj);
        Modal.success({
            title: 'Testimonials Deleted Successfully.'
        });
        let ctr = {};
        ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
        ctr._limit = pageSizeTotal;
        dispatch(getAllTestimonials(ctr));
        dispatch(getInactiveTestimonials(ctr));
    }

    const editModalOnClick = async (data) => {
        setLoader(true);
        setName(data.testimonials_name);
        setPosition(data.testimonials_pos);
        setSelectedHomeCatId(data.testimonials_id);
        setImage(data.testimonials_image);
        setContent(data.testimonials_content);
        setDesignation(data.testimonials_dis)
        setLoader(false);
        setShowModal(true);
    }

    const closeModalOnClick = () => {
        setName('');
        setPosition('');
        setSelectedHomeCatId('');
        setDesignation('')
        setImage('');
        setContent('');
        setErrors({});
        setShowModal(false);
    }

    const nameOnChange = (name) => {
        let errorObj = { ...errors };
        errorObj['name'] = '';
        setName(name);
        setErrors(errorObj);
    }
    const ContentOnChange = (Content) => {
        let errorObj = { ...errors };
        errorObj['Content'] = '';
        setContent(Content);
        setErrors(errorObj);
    }
    const DesignationOnChange = (Designation) => {
        let errorObj = { ...errors };
        errorObj['Designation'] = '';
        setDesignation(Designation);
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
        formData.append('testimonials', file);
        let result = await TestimonialsRepository.imageUpload(formData);
        if (result && result.statusCode === 200) {
            setImage(result.data);
            setBttonLoader(false);
        }
        errorObj['CatImage'] = '';
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
        if (name && position && Content && image) {
            setLoader(true);
            let obj = {
                "testimonials_image": image,
                "testimonials_name": name,
                "testimonials_dis": Designation,
                "testimonials_pos": position,
                "testimonials_content": Content
            }
            try {
            await TestimonialsRepository.saveTestimonials(obj);
               notification.success({
                    message: 'Testimonials Added Successfully.'
                })
                let ctr = {};
                ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                ctr._limit = pageSizeTotal;
                dispatch(getAllTestimonials(ctr));
                dispatch(getInactiveTestimonials(ctr));
                closeModalOnClick();
            } catch (e) {
                notification.error({
                    message: 'Testimonials Added Failed.'
                });
            }
        } else {
            let errorObj = { ...errors };
            if (!name) errorObj['name'] = "Please Enter Title";
            if (!position) errorObj['position'] = "Please Enter Position";
            if (!image) errorObj['CatImage'] = "Please Select Image";
            setErrors(errorObj);
        }
    }

    const edit = async () => {
        if (name && position && selectedHomeCatId && Content && image) {
            setLoader(true);
            let obj = {
                "testimonials_id": selectedHomeCatId,
                "testimonials_image": image,
                "testimonials_name": name,
                "testimonials_dis": Designation,
                "testimonials_pos": position,
                "testimonials_content": Content
            }
            try {
                await TestimonialsRepository.editTestimonials(selectedHomeCatId, obj);
                notification.success({
                    message: 'Testimonials Updated Successfully.'
                });
                let ctr = {};
                ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                ctr._limit = pageSizeTotal;
                dispatch(getAllTestimonials(ctr));
                dispatch(getInactiveTestimonials(ctr));
                closeModalOnClick();
            } catch (e) {
                notification.error({
                    message: 'Testimonials  Updated Failed.'
                });
            }
        } else {
            let errorObj = { ...errors };
            if (!name) errorObj['name'] = "Please Enter Title";
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
            dispatch(getAllTestimonials(ctr));
        } else {
            dispatch(getInactiveTestimonials(ctr));
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
            dispatch(getAllTestimonials(ctr));
        } else {
            dispatch(getInactiveTestimonials(ctr));
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
                array = allTestimonials.map(h => h.cat_id);
            } else {
                array = inactiveTestimonials.map(h => h.cat_id);
            }
        }
        setSelectedHomeCatIds(array);
        setSelectAll(value);
    }

    const onSelectOne = (id) => {
        let array = [...selectedHomeCatIds];
        let array1 = tab === 'active' ? [...allTestimonials] : [...inactiveTestimonials];
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
                await TestimonialsRepository.inactiveCategory(obj);
                notification.success({
                    message: 'Testimonials  Updated Successfully.'
                });
            }
            if (action === "inactive") {
                obj['status'] = 'N';
                await TestimonialsRepository.inactiveCategory(obj);
                notification.success({
                    message: 'Testimonials  Updated Successfully.'
                });
            }
            if (action === "delete") {
                await TestimonialsRepository.deleteCategory(obj);
                notification.success({
                    message: 'Testimonials  Deleted Successfully.'
                });
            }
            if (action === "position") {
                let array = [...posotionChangeCategorys];
                array = array.filter(a => selectedHomeCatIdsArr.indexOf(a.catId) >= 0);
                await TestimonialsRepository.changePosition({ values: array });
                notification.success({
                    message: 'Testimonials  Updated Successfully.'
                });
            }
            setSelectedHomeCatIds([]);
            setPosotionChangeCategorys([]);
            let ctr = {};
            ctr._start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr._limit = pageSizeTotal;
            dispatch(getAllTestimonials(ctr));
            dispatch(getInactiveTestimonials(ctr));
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
                                <Sidebar page={'Testimonials'} />
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
                                    <TableTestimonials
                                        allTestimonials={tab === "active" ? allTestimonials : inactiveTestimonials}
                                        editModalOnClick={editModalOnClick}
                                        deleteOnetestimonials={deleteOnetestimonials}
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
                    title={selectedHomeCatId ? "Edit Testimonials " : "Add New Testimonials "}
                    width={800}
                    onOk={saveOnClick}
                >
                    <Spin spinning={loader} tip={'Loading...'}>
                        <div className='row'>
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label>Name <span style={{ color: 'red' }}>*</span></label>
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
                                    <label>Designation <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={Designation}
                                        placeholder=""
                                        onChange={(e) => DesignationOnChange(e.target.value)}
                                    />
                                    {errors['Designation'] &&
                                        <span style={{ color: 'red' }}>{errors['Designation']}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Content <span style={{ color: 'red' }}>*</span></label>
                                    <textarea style={{ height: '150px' }}
                                        className="form-control"
                                        type="text"
                                        value={Content}
                                        placeholder=""
                                        onChange={(e) => ContentOnChange(e.target.value)}
                                    > </textarea>
                                    {errors['Content'] &&
                                        <span style={{ color: 'red' }}>{errors['Content']}</span>
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

                    </Spin>
                </Modal>
            </Spin>
        </div>
    );
};


export default Home;
