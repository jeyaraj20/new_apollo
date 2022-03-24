import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../store/auth/action';

const Header = (props) => {

    const dispatch = useDispatch();
    const { auth } = useSelector(({ auth }) => auth);

    const logoutOnClick = () => {
        dispatch(logout());
        window.location.href = "/";
    }

    return (
        <div>
            <div className="dashboard-container" id="headerSticky1" style={{ zIndex: 999 }}>
                <div className="row no-gutters">
                    <div className="col-md-2 h-100">
                        <div className="desktop">
                            <a href="/">
                                <div className="dashborad-logo logo-dashboard text-center">
                                    <img src={"/img/white-logo.png"} className="img-fluid" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-10 col-12 align-self-center h-100" style={{ background: '#fff' }}>
                        <div className="dashborad-logo logo-dashboard set-width">
                            <div className="row mt-1">
                                <div className="col-md-8 col-8 text-left align-self-center" style={{ display: "flex" }}>
                                    <h4 className="m-0">{auth && auth.schoolname ? auth.schoolname : ''}</h4>
                                </div>
                                <div className="col-4 col-md-4 text-right submenu">
                                    <ul className="nav__menu m-0">
                                        <li className="nav__menu-item" style={{ cursor: 'pointer' }}>
                                            <i className="fas fa-sign-out-alt" style={{ color: '#fff', fontSize: '25px' }} onClick={logoutOnClick}></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Header;
