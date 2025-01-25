// src/components/SOSAlert.js
import React from 'react';
import './SOSAlert.css';

const SOSAlert = () => {
    const handleSOS = () => {
        alert("SOS Alert! Caregivers have been notified.");
    };

    return (
        <div className="sos-alert-container">
          <h2 className="sos-alert-header">SOS Alert</h2>
          <button className="sos-alert-button" onClick={handleSOS}>
            Send SOS Alert
          </button>
        </div>

    );
};

export default SOSAlert;