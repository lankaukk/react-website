import React from "react";
import "../App.css";
import "./HeroSection.css";
import { ChangingText, ChangingText2 } from "./HeroItems/ChangingText.js";
// import Draggable from "react-draggable";
import { Link } from "react-router-dom";

export var HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <div style={{ display: "flex", flexDirection: "row", gap: ".3em", alignItems: 'baseline' }}>
          <ChangingText text={["Interactive", "Graphic"]} /> 
          <div style={{ fontFamily: 'Bodoni Moda', fontWeight: "light" }}>
            Web Design
          </div>
        </div>
        <div style={{ fontFamily: 'Bodoni Moda', fontWeight: "light" }}>
          <span style={{fontFamily: "Sniglet", fontWeight: "600" }}>&</span> Development
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: ".3em", alignItems: 'baseline' }}>
          <span style={{ fontFamily: 'Bodoni Moda', fontWeight: "bold" }}>FOR</span>
          <ChangingText2 text2={["Creative", "Bold", "Artistic"]} />
        </div>
        <div style={{ fontFamily: 'Bodoni Moda', fontWeight: "light" }}>
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
              left: Math.random() * (80 - 20) + 10 + "%",
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
              left: Math.random() * (80 - 20) + 10 + "%",
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
              left: Math.random() * (80 - 20) + 10 + "%",
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
              left: Math.random() * (80 - 20) + 10 + "%",
            }}
            src="images/journal-mockup.jpg"
            alt="art"
          />
        </Link>
        <Link to="/gallery">
          <img
            className="hero-image"
            style={{
              top: Math.random() * (80 - 20) + 10 + "%",
              left: Math.random() * (80 - 20) + 10 + "%",
            }}
            src="images/hero/sunflowers.jpg"
            alt="art"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
