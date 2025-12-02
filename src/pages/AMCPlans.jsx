import React from 'react';
import { Shield, Check, Star } from 'lucide-react';

const plans = [
    {
        id: 1,
        name: 'Silver Plan',
        price: 1999,
        features: ['2 Free Services', 'Filter Replacement (Sediment)', 'No Breakdown Support'],
        color: '#9CA3AF'
    },
    {
        id: 2,
        name: 'Gold Plan',
        price: 3499,
        features: ['3 Free Services', 'All Filter Replacement', 'Unlimited Breakdown Support'],
        color: '#FFAB00',
        recommended: true
    },
    {
        id: 3,
        name: 'Platinum Plan',
        price: 4999,
        features: ['4 Free Services', 'All Spares Included', 'Priority Support', 'Extended Warranty'],
        color: '#E5E7EB' // Platinum-ish
    },
];

const AMCPlans = () => {
    return (
        <div className="page fade-in">
            <h2 className="mb-6">AMC Plans</h2>

            <div className="grid-1" style={{ display: 'grid', gap: '20px' }}>
                {plans.map((plan) => (
                    <div key={plan.id} className="card" style={{ position: 'relative', border: plan.recommended ? '2px solid #0052CC' : 'none' }}>
                        {plan.recommended && (
                            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#0052CC', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '10px', fontWeight: 600 }}>
                                RECOMMENDED
                            </div>
                        )}
                        <div className="flex-between mb-4">
                            <div>
                                <h3 style={{ color: plan.recommended ? '#0052CC' : '#1F1F1F' }}>{plan.name}</h3>
                                <h2 style={{ fontSize: '24px' }}>₹{plan.price}<span style={{ fontSize: '14px', color: '#6B7280', fontWeight: 400 }}>/year</span></h2>
                            </div>
                            <Shield size={32} color={plan.color} />
                        </div>

                        <ul style={{ listStyle: 'none', marginBottom: '20px' }}>
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex-center" style={{ justifyContent: 'flex-start', gap: '8px', marginBottom: '8px', fontSize: '14px' }}>
                                    <Check size={16} color="#13C77A" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                            Choose {plan.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AMCPlans;
