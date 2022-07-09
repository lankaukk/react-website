import React from "react";
import { Component } from "react/cjs/react.production.min";
import "../App.css";
import "./HeroSection.css";
import { Occupation } from "./HeroItems/Occupation.js";

class HeroSection extends Component {
  render() {
    return (
      <div className="hero-container">
        <Occupation style={{}} />
        <img
          style={{
            width: "35vw",
            minWidth: "250px",
            maxWidth: "400px",
            position: "absolute",
            top: "20%",
            right: "20%",
          }}
          src="images/hero/squiggle-1.png"
          alt="art"
        />
        <img
          style={{
            width: "25vw",
            minWidth: "150px",
            maxWidth: "200px",
            position: "absolute",
            top: "35%",
            right: "15%",
          }}
          src="images/hero/logo-cursor.png"
          alt="art"
        />
        <img
          style={{
            width: "25vw",
            minWidth: "150px",
            maxWidth: "200px",
            position: "absolute",
            bottom: "20%",
            left: "20%",
          }}
          src="images/hero/grid-light-1.png"
          alt="art"
        />
      </div>
    );
  }
}

export default HeroSection;
