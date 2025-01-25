// src/components/VitalMonitoring.js
import React, { useState } from 'react';
import './VitalMonitoring.css';

const VitalMonitoring = () => {
    const [vitals, setVitals] = useState([]);
    const [bloodPressure, setBloodPressure] = useState('');
    const [heartRate, setHeartRate] = useState('');
    const [glucose, setGlucose] = useState('');

    const handleAddVital = () => {
        if (bloodPressure && heartRate && glucose) {
            setVitals([...vitals, { bloodPressure, heartRate, glucose }]);
            setBloodPressure('');
            setHeartRate('');
            setGlucose('');
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className="vital-monitoring">
            <h2>Vital Monitoring</h2>
            <input
                type="text"
                placeholder="Blood Pressure (e.g., 120/80)"
                value={bloodPressure}
                onChange={(e) => setBloodPressure(e.target.value)}
            />
            <input
                type="text"
                placeholder="Heart Rate (bpm)"
                value={heartRate}
                onChange={(e) => setHeartRate(e.target.value)}
            />
            <input
                type="text"
                placeholder="Glucose Level (mg/dL)"
                value={glucose}
                onChange={(e) => setGlucose(e.target.value)}
            />
            <button onClick={handleAddVital}>Add Vital</button>
            <ul>
                {vitals.map((vital, index) => (
                    <li key={index}>
                        BP: {vital.bloodPressure}, HR: {vital.heartRate}, Glucose: {vital.glucose}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VitalMonitoring;
