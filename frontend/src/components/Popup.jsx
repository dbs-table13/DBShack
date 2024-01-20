import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TitleIcon from "@mui/icons-material/Title";
import ExploreIcon from "@mui/icons-material/Explore";

import { useState } from "react";
import { InputAdornment } from "@mui/material";
// Props: Title, country,
// Modalprops: open, handleClose fn

// Need to implement handleOpen and handleClose
// function on the dashboard page

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const countries = ["Singapore", "Japan", "Korea"];
const destination = ["Zoo", "MBS", "DBS bank"];

export default function Popup() {
  // Todo: Change back to false
  const [open, setOpen] = useState(true);
  const [countryField, setCountryField] = useState("Singapore");
  const [destinations, setDestinations] = useState(destination);

  // CountryField
  const handleChange = (e) => setCountryField(e.target.value);

  // Open and close modal function
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Add Destination input button
  const handleAddInput = () => setDestinations([...destinations, ""]);

  const countriesItem = countries.map((country) => {
    return (
      <MenuItem key={country} value={country}>
        {country}
      </MenuItem>
    );
  });

  // React hook form
  const destinationItems = destinations.map((destination, index) => {
    return (
      <>
        <TextField
          id="filled-basic"
          label={`Destination ${index + 1}:`}
          variant="filled"
          value={destination}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ExploreIcon />
              </InputAdornment>
            ),
          }}
        />
        {index === destinations.length - 1 && (
          <Button
            variant="contained"
            disabled={destination === ""}
            onClick={() => handleAddInput()}
          >
            Add destination
          </Button>
        )}
      </>
    );
  });

  return (
    <Modal open={open} onClose={handleClose}>
      <Box component="form" noValidate autoComplete="off" style={style}>
        <TextField
          id="filled-basic"
          label="Title"
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TitleIcon />
              </InputAdornment>
            ),
          }}
        />
        <InputLabel id="country-select-label">Country</InputLabel>
        <TextField
          id="filled-basic"
          label="Budget"
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MonetizationOnIcon />
              </InputAdornment>
            ),
          }}
        />
        <InputLabel id="budget-label">budget</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          value={countryField}
          label="Country"
          onChange={handleChange}
        >
          {countriesItem}
        </Select>
        {destinationItems}
      </Box>
    </Modal>
  );
}
