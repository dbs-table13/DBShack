import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:3001/users/login", {
        username,
        password,
      });
      localStorage.setItem("jwt", data);
      console.log("Login successful:", data);
      alert("Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(error);
    }
  };

  return (
      <div className="main">
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
          <h2>Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleLogin}>
            <div>
            <TextField
                margin="normal"
                required
                fullWidth
                id="UserName"
                label="UserName"
                name="UserName"
                autoComplete="UserName"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // required
                className="form-input"
              />
            </div>
            <div>
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // required
                className="form-input"
              />
            </div>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Login</Button>
          </form>
        </div>
    </div>
  )
}


export default Login;