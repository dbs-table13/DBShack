import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Destination from "../components/Destination";

const MyItenary = ({ itenary }) => {
	return (
		<Box sx={{ maxWidth: 345 }}>
			<Card>
				<CardMedia
					component="img"
					height="140"
					image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<Button variant="contained">Edit</Button>
				<Button variant="contained">Delete</Button>
			</Card>
		</Box>
	);
};

const Dashboard = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<MyItenary />

			{/* Bottom is Esther */}
			<Destination />
		</div>
	);
};

export default Dashboard;
