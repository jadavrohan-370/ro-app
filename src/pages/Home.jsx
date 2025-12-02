import React, { useState } from 'react';
import { Bell, Droplet, Zap, ShoppingBag, Wifi } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const { notifications } = useApp();
    const [flushActive, setFlushActive] = useState(false);
    const [cleanActive, setCleanActive] = useState(false);

    const handleFlush = () => {
        setFlushActive(true);
        setTimeout(() => setFlushActive(false), 2000);
    };

    const handleClean = () => {
        setCleanActive(true);
        setTimeout(() => setCleanActive(false), 2000);
    };

    return (
        <div className="home-page fade-in">
            {/* Header */}
            <header className="flex-between mb-6">
                <div>
                    <h2 className="text-secondary" style={{ fontSize: '14px', fontWeight: 500 }}>Good Morning,</h2>
                    <h1 style={{ fontSize: '24px' }}>Rahul Sharma</h1>
                </div>
                <div
                    className="icon-btn"
                    style={{ position: 'relative', cursor: 'pointer' }}
                    onClick={() => navigate('/notifications')}
                >
                    <Bell size={24} />
                    {notifications.length > 0 && <span className="badge">{notifications.length}</span>}
                </div>
            </header>

            {/* TDS Gauge Card */}
            <div
                className="glass-card mb-6"
                style={{ padding: '24px', textAlign: 'center', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => navigate('/quality')}
            >
                <div className="water-bg"></div>
                <h3 className="mb-4">Water Quality (TDS)</h3>
                <div className="gauge-container flex-center mb-4">
                    {/* Custom SVG Gauge */}
                    <div style={{ position: 'relative', width: '150px', height: '150px' }}>
                        <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="8" />
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#13C77A" strokeWidth="8" strokeDasharray="283" strokeDashoffset="70" strokeLinecap="round" />
                        </svg>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                            <span style={{ fontSize: '32px', fontWeight: '700', color: '#13C77A' }}>42</span>
                            <div style={{ fontSize: '12px', color: '#6B7280' }}>PPM</div>
                        </div>
                    </div>
                </div>
                <p className="text-accent" style={{ fontWeight: 600 }}>Excellent Quality</p>
            </div>

            {/* Quick Actions */}
            <div className="grid-2 mb-6">
                <button
                    className="card flex-center quick-action-btn"
                    style={{ flexDirection: 'column', gap: '8px', border: 'none', position: 'relative', overflow: 'hidden' }}
                    onClick={handleFlush}
                >
                    {flushActive && <div className="water-wave"></div>}
                    <div className="icon-circle bg-primary-light">
                        <Droplet size={24} color="#0052CC" />
                    </div>
                    <span>{flushActive ? 'Flushing...' : 'Flush RO'}</span>
                </button>
                <button
                    className="card flex-center quick-action-btn"
                    style={{ flexDirection: 'column', gap: '8px', border: 'none', position: 'relative', overflow: 'hidden' }}
                    onClick={handleClean}
                >
                    {cleanActive && <div className="clean-pulse"></div>}
                    <div className="icon-circle bg-accent-light">
                        <Zap size={24} color="#13C77A" />
                    </div>
                    <span>{cleanActive ? 'Cleaning...' : 'Auto Clean'}</span>
                </button>
            </div>

            {/* Quick Access Cards */}
            <div className="grid-2 mb-6">
                <div
                    className="card flex-center"
                    style={{ flexDirection: 'column', gap: '8px', cursor: 'pointer' }}
                    onClick={() => navigate('/store')}
                >
                    <ShoppingBag size={24} color="#0052CC" />
                    <span style={{ fontSize: '12px' }}>Shop Filters</span>
                </div>
                <div
                    className="card flex-center"
                    style={{ flexDirection: 'column', gap: '8px', cursor: 'pointer' }}
                    onClick={() => navigate('/connect')}
                >
                    <Wifi size={24} color="#13C77A" />
                    <span style={{ fontSize: '12px' }}>Connect Device</span>
                </div>
            </div>

            {/* Filter Health Summary */}
            <div className="card mb-6">
                <div className="flex-between mb-4">
                    <h3>Filter Health</h3>
                    <span
                        className="text-primary"
                        style={{ fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
                        onClick={() => navigate('/filters')}
                    >
                        View All
                    </span>
                </div>
                <div className="filter-item mb-4">
                    <div className="flex-between mb-2">
                        <span style={{ fontSize: '14px' }}>Sediment Filter</span>
                        <span style={{ fontSize: '14px', fontWeight: 600 }}>80%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '80%', background: '#13C77A' }}></div>
                    </div>
                </div>
                <div className="filter-item">
                    <div className="flex-between mb-2">
                        <span style={{ fontSize: '14px' }}>RO Membrane</span>
                        <span style={{ fontSize: '14px', fontWeight: 600 }}>45%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '45%', background: '#FFAB00' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
