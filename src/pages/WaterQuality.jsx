import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', tds: 40 },
    { name: 'Tue', tds: 42 },
    { name: 'Wed', tds: 45 },
    { name: 'Thu', tds: 41 },
    { name: 'Fri', tds: 43 },
    { name: 'Sat', tds: 44 },
    { name: 'Sun', tds: 42 },
];

const WaterQuality = () => {
    return (
        <div className="page fade-in">
            <h2 className="mb-6">Water Quality Analytics</h2>

            <div className="card mb-6">
                <h3 className="mb-4">Weekly TDS Trend</h3>
                <div style={{ width: '100%', height: 200 }}>
                    <ResponsiveContainer>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                            <YAxis hide domain={[30, 60]} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                                cursor={{ stroke: '#0052CC', strokeWidth: 1, strokeDasharray: '4 4' }}
                            />
                            <Line type="monotone" dataKey="tds" stroke="#0052CC" strokeWidth={3} dot={{ r: 4, fill: '#0052CC', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="glass-card mb-6" style={{ padding: '20px' }}>
                <h3 className="mb-2">Ideal TDS Range</h3>
                <p className="text-secondary mb-4" style={{ fontSize: '14px' }}>
                    For drinking water, the ideal TDS level is between 50-150 PPM. Your current level is optimal.
                </p>
                <div className="range-indicator" style={{ height: '8px', background: 'linear-gradient(90deg, #13C77A 0%, #FFAB00 100%)', borderRadius: '4px', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '40%', top: '-4px', width: '2px', height: '16px', background: '#000' }}></div>
                </div>
                <div className="flex-between mt-2" style={{ fontSize: '12px', color: '#6B7280' }}>
                    <span>50 PPM</span>
                    <span>150 PPM</span>
                </div>
            </div>
        </div>
    );
};

export default WaterQuality;
