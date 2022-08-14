import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Occupation } from "./HeroItems/Occupation.js";
// import Draggable from "react-draggable";
import { Link } from "react-router-dom";

export var HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <div style={{ display: "flex", flexDirection: "row", gap: ".3em" }}>
          <Occupation style={{}} />
          <div style={{ fontFamily: "Cormorant", fontWeight: "light" }}>
            Web Design
          </div>
        </div>
        <div style={{ fontFamily: "Cormorant", fontWeight: "light" }}>
          & Development
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: ".3em" }}>
          <span style={{ fontFamily: "Sniglet", fontWeight: "bold" }}>FOR</span>
          <span
            style={{ fontFamily: "Staatliches", textTransform: "uppercase" }}
          >
            {"  "}Creative
          </span>
        </div>
        <div style={{ fontFamily: "Cormorant", fontWeight: "light" }}>
          Digital{"  "}
          <span style={{ fontFamily: "Sniglet", fontWeight: "bold" }}>
            Experiences
          </span>
        </div>
      </div>

      <div className="image-container">
      <Link to="/gallery">
        
          <img
            className="hero-image"
            style={{
              top: Math.random() * (80 - 20) + 10 + "%",
              left: Math.random() * (80 - 20) + 20 + "%",
            }}
            src="images/hero/squiggle-1.png"
            alt="art"
          />
        
        </Link>
        <Link to="/projects/_blank">
          
            <img
              className="blurry hero-image"
              style={{
                borderRadius: 10,
                filter: "blur(3px)",
                top: Math.random() * (80 - 20) + 10 + "%",
                left: Math.random() * (80 - 20) + 20 + "%",
              }}
              src="images/projects/blank/desk-person.jpg"
              alt="art"
            />
          
        </Link>
        <Link to="/gallery">
        
          <img
            className="hero-image"
            style={{
              top: Math.random() * (80 - 20) + 10 + "%",
              left: Math.random() * (80 - 20) + 20 + "%",
            }}
            src="images/hero/grid-light-1.png"
            alt="art"
          />
        
        </Link>
        <Link to="/projects/journal-app-design">
        
          <img
            className="hero-image"
            style={{
              borderRadius: 10,
              top: Math.random() * (80 - 20) + 10 + "%",
              left: Math.random() * (80 - 20) + 20 + "%",
            }}
            src="images/journal-mockup.jpg"
            alt="art"
          />
        
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
