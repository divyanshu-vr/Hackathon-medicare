import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage"; // A wrapper for components like Hero, Benefits, etc.
import SOSAlert from './Features/SOSAlert.jsx';
import MedicationReminder from "./Features/MedicationReminder.jsx";
import VitalMonitoring from "./Features/VitalMonitoring.jsx";
import AiChatPage from "./Pages/AiChat.jsx";

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sosalert" element={<SOSAlert />} />
        <Route path="/medicationreminder" element={<MedicationReminder />} />
        <Route path="/vitalmonitoring" element={<VitalMonitoring />} />
        <Route path="/medicine-checker" element={<AiChatPage />} />
      </Routes>
    </div>
  );
};

export default App;

