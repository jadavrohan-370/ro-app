import React, { useState } from 'react';
import { User, MapPin, Shield, Moon, LogOut, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);

    const menuItems = [
        { icon: MapPin, label: 'My Addresses', action: () => alert('Address management coming soon!') },
        { icon: Shield, label: 'Warranty & AMC', action: () => navigate('/amc') },
        { icon: Moon, label: 'Dark Mode', toggle: true },
        { icon: LogOut, label: 'Logout', color: '#FF4D4F', action: () => alert('Logout functionality') }
    ];

    return (
        <div className="page fade-in">
            <h2 className="mb-6">Profile</h2>

            <div className="card flex-center mb-6" style={{ flexDirection: 'column', padding: '32px' }}>
                <div className="icon-circle bg-primary-light" style={{ width: '80px', height: '80px', marginBottom: '16px' }}>
                    <User size={40} color="#0052CC" />
                </div>
                <h3 className="mb-2">Rahul Sharma</h3>
                <p className="text-secondary">+91 98765 43210</p>
            </div>

            <div className="card mb-6" style={{ padding: '0' }}>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex-between"
                        style={{
                            padding: '16px',
                            borderBottom: index !== menuItems.length - 1 ? '1px solid #F3F4F6' : 'none',
                            cursor: 'pointer'
                        }}
                        onClick={item.toggle ? undefined : item.action}
                    >
                        <div className="flex-center" style={{ gap: '12px' }}>
                            <item.icon size={20} color={item.color || '#6B7280'} />
                            <span style={{ color: item.color || '#1F1F1F', fontWeight: 500 }}>{item.label}</span>
                        </div>
                        {item.toggle ? (
                            <div
                                style={{
                                    width: '40px',
                                    height: '24px',
                                    background: darkMode ? '#0052CC' : '#E5E7EB',
                                    borderRadius: '12px',
                                    position: 'relative',
                                    transition: 'background 0.3s',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setDarkMode(!darkMode)}
                            >
                                <div style={{
                                    width: '20px',
                                    height: '20px',
                                    background: 'white',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    top: '2px',
                                    left: darkMode ? '18px' : '2px',
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                                    transition: 'left 0.3s'
                                }}></div>
                            </div>
                        ) : (
                            <ChevronRight size={20} color="#9CA3AF" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
