import React from "react";
import "./Testimonials.css";

const reviews = [
  {
    name: "Aarav Patel",
    role: "Student",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    review:
      "This video call app is simple and smooth. Joining meetings with a code is very easy.",
  },
  {
    name: "Priya Shah",
    role: "Remote Worker",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    review:
      "The meeting history feature is very useful. I can quickly check my previous meetings.",
  },
  {
    name: "Rahul Mehta",
    role: "Team Lead",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    review:
      "The app feels fast and clean. It is useful for online meetings and video calls.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <p className="section-label">User Reviews</p>
      <h2>What users say about our video call app</h2>

      <div className="review-container">
        {reviews.map((item, index) => (
          <div className="review-card" key={index}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p className="role">{item.role}</p>
            <p className="review">“{item.review}”</p>

            <div className="stars">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;