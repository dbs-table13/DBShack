import { NavLink } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Travel and Have Fun!
        </Typography>
        <NavLink
          to="/dashboard"
          style={{ marginRight: "1rem", color: "white" }}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/destination"
          style={{ marginRight: "1rem", color: "white" }}
        >
          Destination
        </NavLink>
        <NavLink
          to="/adddestination"
          style={{ marginRight: "1rem", color: "white" }}
        >
          Add Destination
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
