
import '../App.css'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';import Grid from '@mui/material/Grid';
import Popup from './Popup';
import { useState } from "react";

import axios from 'axios';
import IconButton from '@mui/material/IconButton';


function ItineraryList() {

	const [open,setOpen] = useState(false);
	// const [itineraryDetailsModal,setItineraryDetailsModal] = useState(false);
	// const [itineraryList,setItineraryList] = useState([])
	const itineraryList = [
		{itinerary_id: 1,budget: 300, title: 'Austria Itinerary',destinations:[{id:1,name:"Marina Bay Sands",cost:50,notes:"Iconic hotel"},{id:2,name:"Sentosa Island",cost:50,notes:"Futuristic hotel"}]},
		{itinerary_id: 2,budget: 300, title: 'Austria Itinerary',destinations:[{id:1,name:"Marina Bay Sands",cost:50,notes:"Iconic hotel"},{id:2,name:"Sentosa Island",cost:50,notes:"Futuristic hotel"}]},


	];	

	// axios.get(`https://localhost:3001/getItinerary`)
	// 	.then(res => {
	// 		setItineraryList(res.data;
	// 	})
		
	const handleOpen = () => {
		setOpen(true);
	};


		
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}));
		

	const handleDeleteClick = (itineraryID) => {
		// Ask for confirmation
		const isConfirmed = window.confirm('Are you sure you want to delete this itinerary?');
	
		// If the user confirms, proceed with the delete request
		if (isConfirmed) {
			deleteItinerary(itineraryID);
		}
	}
	
	const deleteItinerary=async(itineraryID)=>{

		try {
			console.log(itineraryID)
			alert("https://localhost:3001/itinerary/"+itineraryID )
			const response = await axios.post("https://localhost:3001/itinerary/"+itineraryID);
			alert("deleted", response.data);
		} catch (error) {
			alert("Error deleting post:", error);
		}
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
			{itineraryList.map(item => (
				<Grid item xs={12} md={6} lg={4} key={item.itinerary_id}>
				<Item sx={{ padding: 0 }}>
					<Card>
						<CardActionArea>
							<CardMedia
							component="img"
							height="200"
							image="./src/static/images/pexels-pixabay-461755.jpg"
							alt="green iguana"
							/>
							<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{item.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{item.budget}
							</Typography>
							</CardContent>
						</CardActionArea>
						<IconButton onClick={() => {handleOpen}}>
							<EditRoundedIcon></EditRoundedIcon>
						</IconButton>
						<IconButton onClick={() => { handleDeleteClick(item.itinerary_id) }}>
							<DeleteForeverRoundedIcon></DeleteForeverRoundedIcon>
						</IconButton>
						<Popup action="update" data={item} open={open} setOpen={setOpen}>
						</Popup>					
						</Card>
				</Item>
				</Grid>
			))}
			</Grid>	  	
		</Box>
	);
}
		
export default ItineraryList;
