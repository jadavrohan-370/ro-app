import React from 'react';
import { Bell, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Notifications = () => {
    const { notifications } = useApp();

    const getIcon = (type) => {
        switch (type) {
            case 'warning': return <AlertTriangle size={20} color="#FFAB00" />;
            case 'danger': return <AlertTriangle size={20} color="#FF4D4F" />;
            case 'success': return <CheckCircle size={20} color="#13C77A" />;
            default: return <Info size={20} color="#0052CC" />;
        }
    };

    return (
        <div className="page fade-in">
            <h2 className="mb-6">Notifications</h2>

            <div className="grid-1" style={{ display: 'grid', gap: '12px' }}>
                {notifications.length === 0 ? (
                    <div className="text-center text-secondary" style={{ padding: '40px' }}>
                        No new notifications
                    </div>
                ) : (
                    notifications.map((notif) => (
                        <div key={notif.id} className="card flex-between" style={{ alignItems: 'flex-start' }}>
                            <div className="flex-center" style={{ gap: '12px', alignItems: 'flex-start' }}>
                                <div style={{ marginTop: '2px' }}>{getIcon(notif.type)}</div>
                                <div>
                                    <h4 style={{ fontSize: '14px', marginBottom: '4px' }}>{notif.title}</h4>
                                    <p className="text-secondary" style={{ fontSize: '12px' }}>{notif.message}</p>
                                </div>
                            </div>
                            <span className="text-secondary" style={{ fontSize: '10px', whiteSpace: 'nowrap' }}>{notif.date}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Notifications;
