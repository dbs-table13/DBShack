import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FaPlusCircle } from "react-icons/fa";
import "../Destination.css";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

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

const Destination = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/AddDestination");
  };

  const handleAddDestination = (dest) => {
    navigate("/AddDestination", { state: { dest } });
  };

  return (
    <>
      <h1 className="center">Explore Destinations</h1>
      <div className="policies-grid">
        {destinationsToGo.map((destination, index) => (
          <div className="flex-item relative" key={index}>
            <div className="center">
              <Box sx={{ maxWidth: 345 }} m={2} className="center">
                <Card p={2}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={destination.imgLocation}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {destination.destination}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {destination.country}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${destination.budget}
                    </Typography>
                  </CardContent>
                  <div>
                    <Button
                      className="center"
                      m={2}
                      p={2}
                      onClick={() => handleAddDestination(destination)}
                    >
                      <span>Add </span>{" "}
                      <FaPlusCircle m={2} className="center" />
                    </Button>
                  </div>
                </Card>
              </Box>
            </div>
          </div>
        ))}
        <Box sx={{ maxWidth: 345 }} m={2} className="center">
          <Card p={2}>
            <CardContent className="center">
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={handleAdd}
              >
                Add Your Own Destination
              </Button>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
};

export default Destination;
