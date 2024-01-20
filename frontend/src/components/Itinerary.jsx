
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
// import axios from 'axios';
import IconButton from '@mui/material/IconButton';
function ItineraryList() {

	// const [itineraryList,setItineraryList] = useState([])
	const itineraryList = [
		{id: 1,country_id:2,user_id:4, budget: 300, title: 'Austria Itinerary'},
		{id: 2,country_id:4,user_id:4, budget: 300, title: 'Austria Itinerary'},
		{id: 3,country_id:4,user_id:4, budget: 300, title: 'Austria Itinerary'},
		{id: 4,country_id:4,user_id:4, budget: 300, title: 'Austria Itinerary'}

	];	

	// axios.get(`https://localhost:3001/getItinerary`)
	// 	.then(res => {
	// 		setItineraryList(res.data;
	// 	})
		

		
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}));
		
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
			{itineraryList.map(item => (
				<Grid item xs={12} md={6} lg={4} key={item.id}>
				<Item sx={{ padding: 0 }}>
					<Card>
					<CardActionArea>
						<CardMedia
						component="img"
						height="200"
						image="src/static/images/pexels-pixabay-461755.jpg"
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
					<IconButton onClick={() => { alert("Edit") }}>
						<EditRoundedIcon></EditRoundedIcon>
					</IconButton>
					<IconButton onClick={() => { alert("Delete") }}>
						<DeleteForeverRoundedIcon></DeleteForeverRoundedIcon>
					</IconButton>
					</Card>
				</Item>
				</Grid>
			))}
			</Grid>	  	
		</Box>
	);
}
		
export default ItineraryList;
