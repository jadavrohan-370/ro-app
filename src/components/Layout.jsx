import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const Layout = () => {
    return (
        <>
            <div className="app-content" style={{ padding: '20px' }}>
                <Outlet />
            </div>
            <BottomNav />
        </>
    );
};

export default Layout;
