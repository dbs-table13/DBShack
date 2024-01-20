import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Destination from "./components/Destination.jsx";
import Login from "./pages/Login.jsx";
import Popup from "./components/Popup.jsx";
import AddDestination from "./components/AddDestination.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import "./index.css"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/AddDestination" element={<AddDestination />} />
      </Routes>
    </>
  );
}

export default App;
