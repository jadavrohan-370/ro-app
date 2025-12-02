import React, { useState } from 'react';
import { Calendar, MapPin, Clock, CheckCircle, User, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const navigate = useNavigate();
    const [selectedType, setSelectedType] = useState('Regular Cleaning');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleBookService = () => {
        if (!selectedDate || !selectedTime) {
            alert('Please select date and time');
            return;
        }
        alert(`Service booked!\nType: ${selectedType}\nDate: ${selectedDate}\nTime: ${selectedTime}`);
    };

    return (
        <div className="page fade-in">
            <h2 className="mb-6">Book Service</h2>

            {/* Service Type Selector */}
            <div className="card mb-6">
                <h3 className="mb-4">Select Service</h3>
                <div className="grid-1" style={{ display: 'grid', gap: '12px' }}>
                    {['Regular Cleaning', 'Filter Replacement', 'Full Servicing'].map((type) => (
                        <div
                            key={type}
                            onClick={() => setSelectedType(type)}
                            style={{
                                padding: '12px',
                                border: selectedType === type ? '2px solid #0052CC' : '1px solid #E5E7EB',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                background: selectedType === type ? 'rgba(0, 82, 204, 0.05)' : 'white',
                                transition: 'all 0.2s'
                            }}
                            className="flex-between"
                        >
                            <span style={{ fontWeight: 500 }}>{type}</span>
                            {selectedType === type && <CheckCircle size={20} color="#0052CC" />}
                        </div>
                    ))}
                </div>
            </div>

            {/* Date & Time */}
            <div className="card mb-6">
                <h3 className="mb-4">Schedule</h3>
                <div className="mb-4" style={{ padding: '12px', background: '#F9FAFB', borderRadius: '8px' }}>
                    <div className="flex-center" style={{ gap: '8px', marginBottom: '8px' }}>
                        <Calendar size={20} color="#6B7280" />
                        <span>Select Date</span>
                    </div>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #E5E7EB',
                            borderRadius: '6px',
                            fontFamily: 'Inter'
                        }}
                    />
                </div>
                <div style={{ padding: '12px', background: '#F9FAFB', borderRadius: '8px' }}>
                    <div className="flex-center" style={{ gap: '8px', marginBottom: '8px' }}>
                        <Clock size={20} color="#6B7280" />
                        <span>Select Time</span>
                    </div>
                    <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #E5E7EB',
                            borderRadius: '6px',
                            fontFamily: 'Inter'
                        }}
                    >
                        <option value="">Choose time slot</option>
                        <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
                        <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                        <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                        <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                    </select>
                </div>
            </div>

            <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={handleBookService}
            >
                Book Service
            </button>
        </div>
    );
};

export default Service;
