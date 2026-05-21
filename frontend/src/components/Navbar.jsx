import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
import Hero from "../components/Hero.jsx"
import { Video } from "lucide-react";
import './Navbar.css';

const Navbar = () => {

    const router = useNavigate();

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <div className="logo-icon">
          <Video size={22} />
        </div>

        <h3>Video Call</h3>
      </div>

      {/* Nav Links */}
      <div className="nav-links">
        <p
          onClick={() => router("/guest")}
          className="nav-link"
        >
          Join as Guest
        </p>

        <p
          onClick={() => router("/auth")}
          className="nav-link "
        >
          Login
        </p>

        {/* <button
          onClick={() => router("/auth")}
          className="login-btn"
        >
          Login
        </button> */}
      </div>
    </nav>
  )
}

export default Navbar
