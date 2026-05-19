import React from 'react'

const MainJoin = () => {
  return (
    <div>
      <div className="joinPage">
  <div className="joinCard">
    <div className="joinLeft">
      <p className="joinBadge">Start or Join Meeting</p>

      <h1>
        Providing Quality Video Call
        <span>Just Like Quality Education</span>
      </h1>

      <p className="joinText">
        Enter your meeting code and join a secure video call instantly.
      </p>

      <div className="joinForm">
        <TextField
          label="Meeting Code"
          value={meetingCode}
          onChange={(e) => setMeetingCode(e.target.value)}
          variant="outlined"
          fullWidth
        />

        <Button
          variant="contained"
          onClick={joinVideoCall}
          className="joinBtn"
        >
          Join
        </Button>
      </div>
    </div>

    <div className="joinRight">
      <img
        src="/mobile-video-call.svg"
        alt="Video call illustration"
        className="joinImage"
      />
    </div>
  </div>
</div>
    </div>
  )
}

export default MainJoin
