import React, { useState, useEffect } from 'react';
import { Wifi, Smartphone, CheckCircle, Loader } from 'lucide-react';

const DeviceConnect = () => {
    const [status, setStatus] = useState('searching'); // searching, connecting, connected

    useEffect(() => {
        if (status === 'searching') {
            setTimeout(() => setStatus('connecting'), 2000);
        } else if (status === 'connecting') {
            setTimeout(() => setStatus('connected'), 3000);
        }
    }, [status]);

    return (
        <div className="page fade-in flex-center" style={{ flexDirection: 'column', height: '80vh', textAlign: 'center' }}>
            <h2 className="mb-6">Device Connectivity</h2>

            <div className="mb-6" style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Ripple Animation */}
                {status !== 'connected' && (
                    <>
                        <div className="ripple" style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '2px solid #0052CC', opacity: 0.5, animation: 'ripple 2s infinite' }}></div>
                        <div className="ripple" style={{ position: 'absolute', width: '80%', height: '80%', borderRadius: '50%', border: '2px solid #0052CC', opacity: 0.5, animation: 'ripple 2s infinite 0.5s' }}></div>
                    </>
                )}

                <div className="glass-card flex-center" style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'white', zIndex: 2 }}>
                    {status === 'searching' && <Wifi size={48} color="#0052CC" />}
                    {status === 'connecting' && <Loader size={48} color="#0052CC" className="spin" />}
                    {status === 'connected' && <CheckCircle size={48} color="#13C77A" />}
                </div>
            </div>

            <h3 className="mb-2">
                {status === 'searching' && 'Searching for RO Purifier...'}
                {status === 'connecting' && 'Connecting to Device...'}
                {status === 'connected' && 'Connected Successfully!'}
            </h3>

            <p className="text-secondary mb-6">
                {status === 'searching' && 'Make sure your device is in pairing mode.'}
                {status === 'connecting' && 'Establishing secure connection.'}
                {status === 'connected' && 'You can now monitor your water quality in real-time.'}
            </p>

            {status === 'connected' && (
                <div className="card fade-in" style={{ width: '100%' }}>
                    <div className="flex-between mb-2">
                        <span>Signal Strength</span>
                        <span className="text-accent">Excellent</span>
                    </div>
                    <div className="flex-between">
                        <span>Firmware</span>
                        <span>v2.1.0</span>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
};

export default DeviceConnect;
