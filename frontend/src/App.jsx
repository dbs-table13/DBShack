import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>React App</h1>
			<Routes>
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
