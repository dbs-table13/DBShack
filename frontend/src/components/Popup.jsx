import axios from "axios";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TitleIcon from "@mui/icons-material/Title";
import { InputAdornment } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";


// Props: Title, country,
// Modalprops: open, handleClose fn

// Need to implement handleOpen and handleClose
// function on the dashboard page

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  padding: 16,
  p: 4,
};

const countries = ["Singapore", "Japan", "Korea"];

// eslint-disable-next-line react/prop-types
export default function Popup({ action, data, open, setOpen}) {
  // eslint-disable-next-line react/prop-types
  const { destinations, budget, country, title, itinerary_id } = data;
  const [titleField, setTitleField] = useState(title || "");
  const [countryField, setCountryField] = useState(country || "");
  const [budgetField, setBudgetField] = useState(budget || 0);
  const [destinationObject, setDestinationObject] = useState(destinations || {});

  //titleField
  const handleTitleChange = (e) => setTitleField(e.target.value);

  // CountryField
  const handleCountryChange = (e) => setCountryField(e.target.value);
  const handleBudgetChange = (e) => setBudgetField(Number(e.target.value));

  // Open and close modal function
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDestinationInput = (e) => {
    return setDestinationObject((prevState) => {
      return {...prevState, [e.target.name]: e.target.value};
    });
  }


  const countriesItem = countries.map((country) => {
    return (
      <MenuItem key={country} value={country}>
        {country}
      </MenuItem>
    );
  });

  // POST OR PATCH DATA according to action prop
  const handleSubmit = async () => {
    const data = {
      title: titleField,
      budget: budgetField,
      destinations: new Array(destinationObject),
    }
    if (action === "create") {
      await axios.post("http://localhost:3001/itinerary", data)
    }

    const url = `http://localhost:3001/itinerary/${itinerary_id}`;
    await axios.put(url, data);
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box component="form" noValidate autoComplete="off" style={style}>
        <TextField
          id="filled-basic"
          label="Title"
          variant="filled"
          value={titleField}
          onChange={handleTitleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TitleIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="filled-basic"
          label="Budget"
          variant="filled"
          value={budgetField}
          onChange={handleBudgetChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MonetizationOnIcon />
              </InputAdornment>
            ),
          }}
        />
        <InputLabel id="budget-label">Country</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          value={countryField}
          label="Country"
          onChange={handleCountryChange}
          disabled={true}
        >
          {countriesItem}
        </Select>
        <Box key={destinationObject.name}>
          <TextField key={destinationObject.name}
                     id="filled-basic"
                     label={`Destination`}
                     variant="filled"
                     value={destinationObject.name}
                     onChange={handleDestinationInput}
                     InputProps={{
                       startAdornment: (
                         <InputAdornment position="start">
                           <ExploreIcon />
                         </InputAdornment>
                       ),
                     }}
          />
          <TextField
            id="filled-basic"
            label="Cost"
            variant="filled"
            value={destinationObject.cost}
            onChange={handleDestinationInput}
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MonetizationOnIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="filled-basic"
            label="Notes"
            variant="filled"
            type="string"
            value={destinationObject.notes}
            onChange={handleDestinationInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Button onClick={() => handleSubmit()} variant="contained">{action === "create" ? "Create new itinerary" : "Update itinerary"}</Button>
      </Box>
    </Modal>
  );
}
