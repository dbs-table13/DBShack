import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Destination from "./components/Destination.jsx";
import Login from "./pages/Login.jsx";
import "./App.css";

function App() {
	return (
		<>
			<h1>React App</h1>
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/login" element={<Login />} />
				<Route path="/destination" element={<Destination />} />
			</Routes>
		</>
	);
}

export default App;
