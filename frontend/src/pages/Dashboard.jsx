import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Destination from "../components/Destination";
import ItineraryList from "../components/Itinerary.jsx"




const Dashboard = () => {
	return (
		<div>
			<h1>Dashboard</h1>
				<ItineraryList/>
			{/* Bottom is Esther */}
			{/* <Destination /> */}
		</div>
	);
};

export default Dashboard;
