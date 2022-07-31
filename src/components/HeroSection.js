import React from "react";
import { Component } from "react/cjs/react.production.min";
import "../App.css";
import "./HeroSection.css";
// import { Occupation } from "./HeroItems/Occupation.js";

class HeroSection extends Component {
  render() {
    return (
      <div className="hero-container">
        {/* <Occupation style={{}} /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            fontFamily: "Staatliches",
            textTransform: "uppercase",
            fontSize: '6vw'
          }}
        >
          <div>Interactive Web Design</div>
          <div>& Development</div>
          <div>for Creative</div>
          <div>Digital Experiences</div>
        </div>
        <img
          style={{
            width: "10vw",
            minWidth: "140px",
            position: "absolute",
            top: "20%",
            right: "20%",
          }}
          src="images/hero/squiggle-1.png"
          alt="art"
        />
        <img
          style={{
            width: "10vw",
            minWidth: "140px",
            maxWidth: "200px",
            position: "absolute",
            top: "35%",
            right: "15%",
            filter: "blur(3px)",
            borderRadius: 10,
          }}
          src="images/projects/blank/desk-person.jpg"
          alt="art"
        />
        <img
          style={{
            width: "10vw",
            minWidth: "140px",
            maxWidth: "200px",
            position: "absolute",
            bottom: "30%",
            left: "20%",
          }}
          src="images/hero/grid-light-1.png"
          alt="art"
        />
        <img
          style={{
            width: "7vw",
            minWidth: "140px",
            maxWidth: "200px",
            position: "absolute",
            bottom: "20%",
            left: "40%",
            borderRadius: 20,
          }}
          src="images/journal-mockup.jpg"
          alt="art"
        />
      </div>
    );
  }
}

export default HeroSection;
