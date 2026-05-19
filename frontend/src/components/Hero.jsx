import React from "react";
import Navbar from "./Navbar";
import {
  Video,
  ShieldCheck,
  Download,
  Mic,
  Monitor,
  Users,
  MessageCircle,
  Phone,
  MoreVertical,
} from "lucide-react";
import "./hero.css";

const people = [
  {
    name: "Sarah Johnson",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
  },
  {
    name: "Michael Brown",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
  },
  {
    name: "Alex Chen",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
  },
  {
    name: "Emma Davis",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
  },
];

const Home = () => {
  return (
    <div>
        <Navbar/>
    
    <section className="hero">
      <div className="hero-left">
        <div className="badge">#1 Video Meeting Platform</div>

        <h1>
          Connect. Collaborate.
          <span> Meet Without Limits.</span>
        </h1>

        <p>
          MeetConnect makes video calling and online meetings simple, secure,
          and seamless for teams, businesses, and people everywhere.
        </p>

        <div className="buttons">
          <button className="primary-btn">
            <Video size={20} />
            Start a Meeting
          </button>

          <button className="secondary-btn">
            <Video size={20} />
            Join a Meeting
          </button>
        </div>

        <div className="features">
          <div>
            <Download size={24} />
            <span>No Download Required</span>
          </div>

          <div>
            <Video size={24} />
            <span>HD Video & Clear Audio</span>
          </div>

          <div>
            <ShieldCheck size={24} />
            <span>Secure & Private</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="meeting-card">
          <div className="meeting-header">
            <span>Project Discussion</span>
            <span>00:24:15</span>
            <div className="header-icons">
              <Users size={18} />
              <MoreVertical size={18} />
            </div>
          </div>

          <div className="video-grid">
            {people.map((person, index) => (
              <div className="video-box" key={index}>
                <img src={person.img} alt={person.name} />
                <div className="name-tag">{person.name}</div>
              </div>
            ))}
          </div>

          <div className="controls">
            <button><Mic size={20} /></button>
            <button><Video size={20} /></button>
            <button><Monitor size={20} /></button>
            <button><Monitor size={20} /></button>
            <button><Users size={20} /></button>
            <button><MessageCircle size={20} /></button>
            <button className="end-call"><Phone size={22} /></button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;