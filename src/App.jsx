import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage"; // A wrapper for components like Hero, Benefits, etc.
import LoginPage from "./Pages/LoginPage"; // For Login

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
