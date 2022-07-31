import React from "react";
import { Component } from "react/cjs/react.production.min";
import "../App.css";
import "./HeroSection.css";
import { Occupation } from "./HeroItems/Occupation.js";
import Draggable from "react-draggable";

class HeroSection extends Component {
  render() {
    return (
      <div className="hero-container">
        
        <div className="hero-text-container">
          <div style={{ display: "flex", flexDirection: "row", gap: ".6em" }}>
            <Occupation style={{}} />
            <div style={{ fontFamily: "Cormorant", fontWeight: "light" }}>
              {" "}
              Web Design
            </div>
          </div>
          <div style={{ fontFamily: "Cormorant", fontWeight: "light" }}>
            <span style={{}}>&</span> Development
          </div>
          <div>
            <span style={{ fontFamily: "Sniglet", fontWeight: "bold" }}>
              FOR
            </span>{" "}
            <span
              style={{ fontFamily: "Staatliches", textTransform: "uppercase" }}
            >
              Creative
            </span>
          </div>
          <div style={{ fontFamily: "Cormorant", fontWeight: "light" }}>
            Digital{" "}
            <span style={{ fontFamily: "Sniglet", fontWeight: "bold" }}>
              Experiences
            </span>
          </div>
        </div>

        <div className="image-container">
          <Draggable>
            <img
              className="hero-image"
              style={{
                
                

                top: "20%",
                right: "20%",
              }}
              src="images/hero/squiggle-1.png"
              alt="art"
            />
          </Draggable>
          <Draggable>
            <img
              className="blurry hero-image"
              style={{
                
                
                maxWidth: "200px",
                top: "35%",
                right: "15%",
                borderRadius: 10,
              }}
              src="images/projects/blank/desk-person.jpg"
              alt="art"
            />
          </Draggable>
          <Draggable>
            <img
              className="hero-image"
              style={{
                
                
                maxWidth: "200px",

                bottom: "30%",
                left: "20%",
              }}
              src="images/hero/grid-light-1.png"
              alt="art"
            />
          </Draggable>
          <Draggable>
            <img
              className="hero-image"
              style={{
                
                
                maxWidth: "200px",

                bottom: "18%",
                left: "37%",
                borderRadius: 20,
              }}
              src="images/journal-mockup.jpg"
              alt="art"
            />
          </Draggable>
        </div>
      </div>
    );
  }
}

export default HeroSection;
