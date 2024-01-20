import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';
import "./App.css";

function App() {
	return (
		<>
			<h1>React App</h1>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
