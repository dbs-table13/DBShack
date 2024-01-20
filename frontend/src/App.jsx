import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Destination from "./components/Destination.jsx";
import Login from "./pages/Login.jsx";
import Popup from "./components/Popup.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>React App</h1>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/popup" element={<Popup />} />
      </Routes>
    </>
  );
}

export default App;
