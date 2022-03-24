import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { getAdminUserMenu } from '../../store/admin/action';

const Sidebar = (props) => {

    const dispatch = useDispatch();
    const { userMenu } = useSelector(({ admin }) => admin);

    useEffect(() => {
        dispatch(getAdminUserMenu());
    }, []);

    return (
        <div>
            <div className="side-menu" id="style-2">
                <ul>
                    <li className={props.page === "home" ? "active" : ''}>
                        <Link href="/home">
                            <a><i className="fas fa-home"></i>Home</a>
                        </Link>
                    </li>
                    {userMenu.map(m => {
                        let href = m.menu_link.split('/app')[1];
                        return (
                            <li className={props.page === m.menu_title ? "active" : ''} key={m.menu_id}>
                                <Link href={href}>
                                    <a><i className={`fas fa-${m.menu_icon}`}></i>{m.menu_title}</a>
                                </Link>
                            </li>
                        )
                    })}
                    <li className={props.page === "Change Password" ? "active" : ''}>
                        <Link href="/changepassword/view">
                            <a><i className="fas fa-unlock"></i>Change Password</a>
                        </Link>
                    </li>   
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;