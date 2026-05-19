import React, { useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Lobby.css";

const Lobby = () => {
  const [username, setUsername] = useState("");
  let localVideoref = useRef();

  const connect = () => {
    console.log("Username:", username);
  };

  return (
    <div className="lobbyPage">
      <div className="lobbyCard">
        <div className="lobbyLeft">
          <p className="lobbyBadge">Video Meeting Platform</p>

          <h2>Enter into Lobby</h2>

          <p className="lobbyText">
            Join your meeting with a username and check your camera before entering.
          </p>

          <div className="lobbyForm">
            <TextField
              id="outlined-basic"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              fullWidth
            />

            <Button variant="contained" onClick={connect} className="connectBtn">
              Connect
            </Button>
          </div>
        </div>

        <div className="lobbyRight">
          <div className="videoPreview">
            <video ref={localVideoref} autoPlay muted></video>
            <div className="videoLabel">Camera Preview</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;