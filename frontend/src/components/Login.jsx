import React from 'react'
import { Button, IconButton, TextField } from '@mui/material';
import './Login.css'

const Login = () => {
  return (
    <div>
      <div className="authPage">
  <div className="authCard">
    <div className="authLeft">
      <h1>Welcome to MeetConnect</h1>
      <p>
        Secure video meetings, team collaboration, and real-time chat in one
        simple platform.
      </p>

      <div className="authFeatures">
        <span>HD Video Calls</span>
        <span>Private Meetings</span>
        <span>Instant Chat</span>
      </div>
    </div>

    <div className="authRight">
      <div className="authIcon">🔒</div>

      <div className="authTabs">
        <button className="activeTab">SIGN IN</button>
        <button>SIGN UP</button>
      </div>

      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        className="authInput"
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        className="authInput"
      />

      <Button variant="contained" fullWidth className="authBtn">
        Login
      </Button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
