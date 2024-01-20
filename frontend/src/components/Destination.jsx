import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FaPlusCircle } from "react-icons/fa";
import Fab from '@mui/material/Fab';
import "../Destination.css";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

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
    <>
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
    </>
  );
};

const Destination = () => {
  return (
    <>
      <h1 className="center">Explore Destinations</h1>
      <div className="policies-grid">
        {destinationsToGo.map((destination, index) => (
          <div className="flex-item relative" key={index}>
            <MyDestinations key={index} dest={destination} />
          </div>
        ))}
        <Box sx={{ maxWidth: 345 }} m={2} className="center">
            <Card p={2}>
              <CardContent className="center">
                <Button variant="outlined" startIcon={<AddIcon />}>
                  Add Your Own Destination
                </Button>
              </CardContent>
            </Card>
          </Box>
        <div className="center">
    
        </div>
      </div>
    </>
  );
};

export default Destination;
