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
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: 16,
  p: 4,
};

const countries = ["Singapore", "Japan", "Korea"];
const destination = ["Zoo", "MBS", "DBS bank"];

export default function Popup() {
  // Todo: Change back to false
  const [open, setOpen] = useState(true);
  const [countryField, setCountryField] = useState("Singapore");
  const [budgetField, setBudgetField] = useState(0);
  const [destinations, setDestinations] = useState(destination);

  // CountryField
  const handleCountryChange = (e) => setCountryField(e.target.value);
  const handleBudgetChange = (e) => setBudgetField(Number(e.target.value));

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

  // Todo: Change destination to API response
  const destinationItems = destinations.map((destination, index) => {
    return (
      <>
        <TextField key={destination}
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
            style={{justifySelf: "end"}}
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
        // Todo: update disabled based on "update" or "create"
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
        {destinationItems}
      </Box>
    </Modal>
  );
}
