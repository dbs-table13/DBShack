import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FaPlusCircle } from "react-icons/fa";
import "../Destination.css";
import axios from "axios";
import { useEffect } from "react";

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
	// useEffect(() => {
	// 	if (employeeId) {
	// 		axios
	// 			.get(`http://localhost:3001/xxxx`, {
	// 				params: { employeeId },
	// 			})
	// 			.then((response) => {
	// 				setPolicies(response.data);
	// 			})
	// 			.catch((error) => {
	// 				console.log(error);
	// 			});
	// 	}
	// }, []);

	return (
		<div className="center">
			<Box sx={{ maxWidth: 345 }} m={2} className="center">
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
					<div>
						<Button
							className="center"
							m={2}
							p={2}
							onClick={() => handleAddDestination()}
						>
							<span>Add </span> <FaPlusCircle m={2} className="center" />
						</Button>
					</div>
				</Card>
			</Box>
		</div>
	);
};

const Destination = () => {
	return (
		<div className="policies-grid">
			{destinationsToGo.map((destination, index) => (
				<div className="flex-item relative" key={index}>
					<MyDestinations key={index} dest={destination} />
				</div>
			))}
			<div className="center">
				<Box sx={{ maxWidth: 345 }} m={2} className="center">
					<Card p={2}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Add a new destination
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1}
									stroke="currentColor"
									className="w-1 h-1"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 4.5v15m7.5-7.5h-15"
									/>
								</svg>
							</Typography>
						</CardContent>
					</Card>
				</Box>
			</div>
		</div>
	);
};

export default Destination;
