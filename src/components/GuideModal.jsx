import React from 'react';
import { X, AlertTriangle, Wrench } from 'lucide-react';
import './GuideModal.css';

const filterGuides = {
    'Sediment Filter': {
        tools: ['Wrench', 'Clean cloth', 'Bucket'],
        steps: [
            {
                title: 'Turn off water supply',
                description: 'Close the inlet valve to stop water flow to the purifier. This prevents water spillage during replacement.'
            },
            {
                title: 'Release pressure',
                description: 'Open the faucet to release any built-up pressure in the system. Wait until water stops flowing.'
            },
            {
                title: 'Remove filter housing',
                description: 'Use a wrench to unscrew the filter housing. Place a bucket underneath to catch any remaining water.'
            },
            {
                title: 'Replace the filter',
                description: 'Remove the old sediment filter and insert the new one. Ensure it fits snugly in the housing.'
            },
            {
                title: 'Reassemble and test',
                description: 'Screw the housing back tightly. Turn on the water supply and check for leaks. Run water for 2-3 minutes to flush the new filter.'
            }
        ],
        warning: 'Always turn off the water supply before starting. Keep a bucket handy to catch water.'
    },
    'Pre-Carbon Filter': {
        tools: ['Wrench', 'Clean cloth', 'Bucket'],
        steps: [
            {
                title: 'Power off the system',
                description: 'Turn off the RO system and close the water inlet valve to prevent water flow.'
            },
            {
                title: 'Depressurize the system',
                description: 'Open the faucet to release pressure. Wait until all water has drained out.'
            },
            {
                title: 'Remove housing cap',
                description: 'Unscrew the pre-carbon filter housing using a wrench. Be prepared for some water spillage.'
            },
            {
                title: 'Install new filter',
                description: 'Take out the old carbon filter and insert the new one. Make sure the O-ring is properly seated.'
            },
            {
                title: 'Flush the system',
                description: 'Reassemble the housing, turn on water supply, and flush for 5 minutes to remove carbon fines.'
            }
        ],
        warning: 'Carbon filters need longer flushing (5 minutes) to remove loose carbon particles.'
    },
    'RO Membrane': {
        tools: ['Wrench', 'Sanitizing solution', 'Gloves', 'Bucket'],
        steps: [
            {
                title: 'Shut down the system',
                description: 'Turn off the RO system completely. Close both inlet and outlet valves to isolate the membrane.'
            },
            {
                title: 'Remove pre-filters',
                description: 'Take out sediment and carbon filters first to access the RO membrane housing.'
            },
            {
                title: 'Extract old membrane',
                description: 'Unscrew the membrane housing cap. Carefully pull out the old RO membrane using the cap or your hands.'
            },
            {
                title: 'Clean the housing',
                description: 'Wipe the inside of the membrane housing with a clean, damp cloth. Check O-rings for damage.'
            },
            {
                title: 'Install new membrane',
                description: 'Insert the new RO membrane with the rubber seal facing outward. Push it in firmly until it stops.'
            },
            {
                title: 'Reassemble and sanitize',
                description: 'Screw the housing cap back. Reinstall pre-filters. Flush the system for 30 minutes before use.'
            }
        ],
        warning: 'RO membrane replacement requires system sanitization. Flush for at least 30 minutes before drinking.'
    },
    'UV Lamp': {
        tools: ['Gloves', 'Clean cloth', 'Screwdriver'],
        steps: [
            {
                title: 'Disconnect power',
                description: 'Unplug the RO system from the power outlet. Never handle UV lamp with power on.'
            },
            {
                title: 'Remove UV chamber cover',
                description: 'Unscrew the UV chamber cover carefully. Avoid touching the quartz sleeve.'
            },
            {
                title: 'Take out old lamp',
                description: 'Gently pull out the old UV lamp. Dispose of it properly as it contains mercury.'
            },
            {
                title: 'Clean quartz sleeve',
                description: 'Wipe the quartz sleeve with a clean, lint-free cloth. Any dirt reduces UV effectiveness.'
            },
            {
                title: 'Install new UV lamp',
                description: 'Insert the new UV lamp carefully. Ensure it\'s properly seated in the socket.'
            },
            {
                title: 'Test the system',
                description: 'Replace the cover, plug in the system, and check if the UV indicator light turns on.'
            }
        ],
        warning: 'UV lamps contain mercury. Handle with care and dispose of properly. Never look directly at UV light.'
    }
};

const GuideModal = ({ filter, onClose }) => {
    if (!filter) return null;

    const guide = filterGuides[filter.name];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 style={{ fontSize: '18px', margin: 0 }}>{filter.name} Replacement</h2>
                    <button className="modal-close" onClick={onClose}>
                        <X size={24} color="#6B7280" />
                    </button>
                </div>

                <div className="modal-body">
                    {/* Tools Needed */}
                    <div className="tools-needed">
                        <h4><Wrench size={16} style={{ display: 'inline', marginRight: '6px' }} />Tools Needed</h4>
                        <div className="tools-list">
                            {guide.tools.map((tool, index) => (
                                <span key={index} className="tool-tag">{tool}</span>
                            ))}
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="guide-steps">
                        {guide.steps.map((step, index) => (
                            <div key={index} className="guide-step">
                                <div className="step-number">{index + 1}</div>
                                <div className="step-content">
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Warning */}
                    <div className="warning-box">
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                            <AlertTriangle size={18} color="#FFAB00" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <p><strong>Important:</strong> {guide.warning}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideModal;
