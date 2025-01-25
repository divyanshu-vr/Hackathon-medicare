// src/components/VitalMonitoring.js
import React, { useState } from 'react';

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
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="bg-gray-900 text-white p-8 rounded-lg max-w-md mx-auto mt-12 text-center">
            <h2 className="text-3xl font-semibold text-green-500 mb-4">Vital Monitoring</h2>
            <p className="text-lg text-gray-400 mb-6">Monitor your vital health stats like Blood Pressure, Heart Rate, and Glucose Levels.</p>

            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Blood Pressure (e.g., 120/80)"
                    value={bloodPressure}
                    onChange={(e) => setBloodPressure(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="text"
                    placeholder="Heart Rate (bpm)"
                    value={heartRate}
                    onChange={(e) => setHeartRate(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="text"
                    placeholder="Glucose Level (mg/dL)"
                    value={glucose}
                    onChange={(e) => setGlucose(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <button
                onClick={handleAddVital}
                className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-green-400 hover:scale-105 focus:outline-none"
            >
                Add Vital
            </button>

            <ul className="mt-6 space-y-4">
                {vitals.map((vital, index) => (
                    <li key={index} className="text-lg text-gray-300">
                        BP: {vital.bloodPressure}, HR: {vital.heartRate}, Glucose: {vital.glucose}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VitalMonitoring;
