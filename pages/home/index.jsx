import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';

const Home = (props) => {

    const { auth } = useSelector(({ auth }) => auth);

    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('persist:QuestionCloudAdmin'));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, [auth]);

    return (
        <div>
            <HeaderDashboard />
            <div className="dashboard-container">
                <div className="row no-gutters">
                    <div className="col-md-2">
                        <div id="sidebar">
                            <Sidebar page={'home'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Home;
