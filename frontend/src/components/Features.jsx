import React from "react";
import {
  Video,
  MonitorUp,
  MessageCircle,
  CalendarDays,
  ShieldCheck,
  Users,
} from "lucide-react";
import "./Features.css";

const features = [
  {
    icon: <Video size={30} />,
    title: "HD Video & Audio",
    desc: "Crystal clear video and noise-free audio for better conversations.",
    color: "#7C4DFF",
  },
  {
    icon: <MonitorUp size={30} />,
    title: "Screen Sharing",
    desc: "Share your screen, presentations, and documents in one click.",
    color: "#3B82F6",
  },
  {
    icon: <MessageCircle size={30} />,
    title: "In-Meeting Chat",
    desc: "Chat, share links, and collaborate without leaving the meeting.",
    color: "#22C55E",
  },
  {
    icon: <CalendarDays size={30} />,
    title: "Schedule Meetings",
    desc: "Plan meetings in advance and send invitations to participants.",
    color: "#F59E0B",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Secure & Private",
    desc: "End-to-end encryption ensures your meetings stay private and safe.",
    color: "#8B5CF6",
  },
  {
    icon: <Users size={30} />,
    title: "Unlimited Possibilities",
    desc: "Host large meetings with your team or connect with a global audience.",
    color: "#EC4899",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-top">
        <p>FEATURES</p>

        <h2>
          Everything You Need for
          <br />
          Productive Meetings
        </h2>
      </div>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div
              className="feature-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;