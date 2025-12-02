import React, { useState } from 'react';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GuideModal from '../components/GuideModal';

const filters = [
    { name: 'Sediment Filter', life: 80, color: '#13C77A', days: 120 },
    { name: 'Pre-Carbon Filter', life: 60, color: '#13C77A', days: 90 },
    { name: 'RO Membrane', life: 45, color: '#FFAB00', days: 45 },
    { name: 'UV Lamp', life: 92, color: '#13C77A', days: 150 },
];

const FilterHealth = () => {
    const navigate = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState(null);

    const openGuide = (filter) => {
        setSelectedFilter(filter);
    };

    const closeGuide = () => {
        setSelectedFilter(null);
    };

    return (
        <div className="page fade-in">
            <h2 className="mb-6">Filter Health</h2>

            <div className="grid-1" style={{ display: 'grid', gap: '16px' }}>
                {filters.map((filter, index) => (
                    <div key={index} className="card">
                        <div className="flex-between mb-2">
                            <h3 style={{ fontSize: '16px' }}>{filter.name}</h3>
                            <span style={{ color: filter.color, fontWeight: 600 }}>{filter.life}%</span>
                        </div>
                        <div className="progress-bar mb-2">
                            <div className="progress-fill" style={{ width: `${filter.life}%`, background: filter.color }}></div>
                        </div>
                        <p className="text-secondary mb-4" style={{ fontSize: '12px' }}>~{filter.days} days remaining</p>

                        <div className="flex-between">
                            <button
                                className="btn btn-outline"
                                style={{ padding: '8px 16px', fontSize: '12px' }}
                                onClick={() => openGuide(filter)}
                            >
                                Replace Guide
                            </button>
                            <button
                                className="btn btn-primary"
                                style={{ padding: '8px 16px', fontSize: '12px' }}
                                onClick={() => navigate('/store')}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Guide Modal */}
            {selectedFilter && (
                <GuideModal filter={selectedFilter} onClose={closeGuide} />
            )}
        </div>
    );
};

export default FilterHealth;
