import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TitleIcon from "@mui/icons-material/Title";
import { useState } from "react";
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

export default function Popup({ action, destination, budget, country, open, setOpen, userId}) {
  // Todo: Change back to false
  const [countryField, setCountryField] = useState("Singapore");
  const [budgetField, setBudgetField] = useState(0);

  // CountryField
  const handleCountryChange = (e) => setCountryField(e.target.value);
  const handleBudgetChange = (e) => setBudgetField(Number(e.target.value));

  // Open and close modal function
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [destinationObject, setDestinationObject] = useState(destination);
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
      </Box>
    </Modal>
  );
}
