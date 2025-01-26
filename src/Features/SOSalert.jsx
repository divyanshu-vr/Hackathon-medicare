// src/components/SOSAlert.js
import React, { useState, useEffect } from 'react';

const SOSAlert = () => {
    const [message, setMessage] = useState('');
    const [timeLeft, setTimeLeft] = useState(10); // Emergency countdown

    useEffect(() => {
        if (timeLeft === 0) {
            setMessage('Emergency Alert Sent!');
        } else if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer); // Clean up the timer on unmount
        }
    }, [timeLeft]);

    const handleSendAlert = () => {
        setMessage('Sending SOS Alert...');
        setTimeLeft(10); // Start the timer again
    };

    return (
        <div className="bg-gray-900 text-white p-8 rounded-xl max-w-md mx-auto mt-20 shadow-xl">
            <h2 className="text-3xl font-semibold text-red-500 mb-6">SOS Alert</h2>
            <p className="text-lg text-gray-400 mb-6">If you're in an emergency, you can trigger an alert to notify your guardian.</p>
            <button 
                onClick={handleSendAlert} 
                className="bg-red-500 text-white px-6 py-3 rounded-lg text-xl w-full mb-4 hover:bg-red-400 transition duration-300"
            >
                Send SOS Alert
            </button>
            {message && <p className="text-lg text-gray-300 mt-4"><strong>{message}</strong></p>}
            {timeLeft > 0 && <p className="text-2xl font-bold text-red-500 mt-4">Time remaining: {timeLeft}s</p>}
        </div>
    );
};

export default SOSAlert;
