// src/components/MedicationReminder.jsx
import React, { useState } from 'react';
import './MedicationReminder.css';

const MedicationReminder = () => {
    const [reminders, setReminders] = useState([]);
    const [medication, setMedication] = useState('');
    const [time, setTime] = useState('');

    const handleAddReminder = () => {
        if (medication && time) {
            setReminders([...reminders, { medication, time }]);
            setMedication('');
            setTime('');
        } else {
            alert("Please fill in both fields.");
        }
    };

    return (
        <div className="medication-reminder-container">
            <h2 className="medication-reminder-header">Medication Reminder</h2>
            <div className="input-container">
                <input
                    className="medication-input"
                    type="text"
                    placeholder="Medication"
                    value={medication}
                    onChange={(e) => setMedication(e.target.value)}
                />
                <input
                    className="time-input"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <button className="medication-add-button" onClick={handleAddReminder}>
                Add Reminder
            </button>
            <ul className="reminders-list">
                {reminders.map((reminder, index) => (
                    <li key={index} className="reminder-item">
                        {reminder.medication} at {reminder.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MedicationReminder;
