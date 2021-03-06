import React from 'react';
import Head from './modules/Head';
const DefaultLayout = ({ children }) => (
    <div className="layout--default">
        <Head />
        {children}
        <div id="loader-wrapper">
            <div className="loader-section section-left"></div>
            <div className="loader-section section-right"></div>
        </div>
        {/* <BackTop>
            <button className="ps-btn--backtop">
                <i className="icon-arrow-up"></i>
            </button>
        </BackTop> */}
    </div>
);

export default DefaultLayout;
