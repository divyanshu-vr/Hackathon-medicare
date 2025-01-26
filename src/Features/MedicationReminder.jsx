// src/components/MedicationReminder.js
import { useState } from 'react';

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
            alert('Please fill in both fields.');
        }
    };

    return (
        <div className="bg-gray-900 text-white p-8 rounded-lg max-w-md mx-auto mt-12 text-center">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">Medication Reminder</h2>
            <p className="text-lg text-gray-400 mb-6">Set your medication timings and get timely reminders.</p>

            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Medication Name"
                    value={medication}
                    onChange={(e) => setMedication(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                onClick={handleAddReminder}
                className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-blue-400 hover:scale-105 focus:outline-none"
            >
                Add Reminder
            </button>

            <ul className="mt-6 space-y-4">
                {reminders.map((reminder, index) => (
                    <li key={index} className="text-lg text-gray-300">
                        {reminder.medication} at {reminder.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MedicationReminder;