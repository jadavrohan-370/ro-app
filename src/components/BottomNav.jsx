import React from 'react';
import { Home, Droplet, Filter, Wrench, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
    return (
        <nav className="bottom-nav">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                <Home size={24} />
                <span>Home</span>
            </NavLink>
            <NavLink to="/quality" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                <Droplet size={24} />
                <span>Quality</span>
            </NavLink>
            <NavLink to="/filters" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                <Filter size={24} />
                <span>Filters</span>
            </NavLink>
            <NavLink to="/service" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                <Wrench size={24} />
                <span>Service</span>
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                <User size={24} />
                <span>Profile</span>
            </NavLink>
        </nav>
    );
};

export default BottomNav;
