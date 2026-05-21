import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';
import '../index.css'



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Authentication() {

    

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");


    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false)


    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {

                await handleLogin(username, password);


            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {

            console.log(err);
            let message = err.response?.data?.message || "something went wrong";
            setError(message);
        }
    }


    return (
        <ThemeProvider theme={defaultTheme}>
    <div className="authPage">
      <div className="authCard">

        {/* LEFT SIDE */}
        <div className="authLeft">
          <div>
            <p className="authBadge">Secure Video Meetings</p>

            <h1>
              Welcome to
              <span>MeetConnect</span>
            </h1>

            <p className="authDescription">
              Connect with your team through secure HD video calls,
              instant chat, and real-time collaboration from anywhere.
            </p>

            <div className="authFeatures">
              <span>HD Meetings</span>
              <span>Private Rooms</span>
              <span>Live Chat</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="authRight">
          <div className="authFormBox">

            <Avatar className="authAvatar">
              <LockOutlinedIcon />
            </Avatar>

            <div className="authTabs">
              <Button
                variant={formState === 0 ? "contained" : "text"}
                onClick={() => setFormState(0)}
                className={formState === 0 ? "activeBtn" : ""}
              >
                Sign In
              </Button>

              <Button
                variant={formState === 1 ? "contained" : "text"}
                onClick={() => setFormState(1)}
                className={formState === 1 ? "activeBtn" : ""}
              >
                Sign Up
              </Button>
            </div>

            <Box component="form" noValidate className="authForm">

              {formState === 1 && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <p style={{ color: "red", marginTop: "10px" }}>
                {error}
              </p>

              <Button
                type="button"
                fullWidth
                variant="contained"
                className="loginBtn"
                onClick={handleAuth}
              >
                {formState === 0 ? "Login" : "Register"}
              </Button>
            </Box>
          </div>
        </div>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        message={message}
      />
    </div>
        </ThemeProvider>

    );
}