import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FaPlusCircle } from "react-icons/fa";
import "../Destination.css";

const destinationsToGo = [
	{
		destination: "Eiffel Tower",
		country: "France",
		imgLocation: "1.jpg",
		budget: 1000,
	},
	{
		destination: "Park Guell",
		country: "USA",
		imgLocation: "2.jpg",
		budget: 1000,
	},
	{
		destination: "Happy Park",
		country: "USA",
		imgLocation: "3.jpg",
		budget: 1000,
	},
	{
		destination: "New York",
		country: "USA",
		imgLocation: "4.jpg",
		budget: 1000,
	},
];

const MyDestinations = ({ dest }) => {
	return (
		<div>
			<Box sx={{ maxWidth: 345 }} m={2}>
				<div>Destination</div>
				<Card p={2}>
					<CardMedia
						component="img"
						height="140"
						image={dest.imgLocation}
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{dest.destination}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{dest.country}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							${dest.budget}
						</Typography>
					</CardContent>
					<Button variant="contained" m={2} p={2}>
						Add <FaPlusCircle />
					</Button>
				</Card>
			</Box>
		</div>
	);
};

const Destination = () => {
	return (
		<div className="policies-grid">
			{destinationsToGo.map((destination, index) => (
				<div className="flex-item" key={index}>
					<MyDestinations key={index} dest={destination} />
				</div>
			))}
		</div>
	);
};

export default Destination;
