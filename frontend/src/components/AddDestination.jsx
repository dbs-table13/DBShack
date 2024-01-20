import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../form.css";
import Paper from "@mui/material/Paper";
import axios from "axios";

const AddDestination = () => {
    const [country_id, setCountryID] = useState("");
    const [cost, setCost] = useState("");
    const [name, setName] = useState("");
    const [notes, setNotes] = useState("");

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
    //
    <div className="center">
        <Paper m={5} p={5}>
        <h2>Add Destination</h2>
        <p>Enter the details of the destination you want to add.</p>
        <form onSubmit={handleSubmit} >
          <TextField
            name="country_id"
            label="Country ID"
            value={country_id}
            onChange={(e) => setCountryID(e.target.value)}
          />
          <br></br>
          <TextField
            name="cost"
            label="Cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <br></br>
          <TextField
            name="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <TextField
            name="notes"
            label="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <br></br>
          <Button type="submit">Submit</Button>
        </form>
      </Paper>
    </div>
  );
};

export default AddDestination;
