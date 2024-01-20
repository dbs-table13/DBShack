import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../form.css";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Link, useLocation } from "react-router-dom";

const AddDestination = () => {
  const location = useLocation();
  const dest = location.state?.dest || {};

  const [country_id, setCountryID] = useState(dest.country_id || "");
  const [cost, setCost] = useState(dest.cost || "");
  const [name, setName] = useState(dest.name || "");
  const [notes, setNotes] = useState(dest.notes || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here

    const data = {
      country_id: country_id,
      cost: cost,
      name: name,
      notes: notes,
    };

    axios({
      method: "post",
      url: `http://localhost:3001/addDestination`,
      data: data,
    })
      .then((response) => {
        // console.log(response.data);
        alert("Destination created/updated successfully");
        if (response.data === "success") {
          alert("Destination created/updated successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Link to="/destination">Back to Destination</Link>
      <div className="center main">
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <Paper>
              <h2>Add Destination</h2>
              <p>Enter the details of the destination you want to add.</p>
              <form onSubmit={handleSubmit}>
                <TextField
                  name="country_id"
                  label="Country ID"
                  value={country_id}
                  onChange={(e) => setCountryID(e.target.value)}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  name="cost"
                  label="Cost"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  name="name"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  name="notes"
                  label="Notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  variant="outlined"
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AddDestination;
