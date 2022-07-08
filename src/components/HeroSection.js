import React from "react";
import { Component } from "react/cjs/react.production.min";
import "../App.css";
import "./HeroSection.css";

class HeroSection extends Component {
  componentDidMount() {
    const text0 = ["Web", "UI", "Digital", "UX"];
    let elem0 = document.getElementById("adjectives");
    let mycounter = 0;
    setInterval(change2, 4000);
    function change2() {
      elem0.innerHTML = text0[mycounter];
      mycounter++;
      if (mycounter >= text0.length) {
        mycounter = 0;
      }
    }

    const text = ["Designer", "Developer", "Artist", "Engineer"];
    let elem = document.getElementById("professions");
    let counter = 0;
    setInterval(change, 1000);
    function change() {
      elem.innerHTML = text[counter];
      counter++;
      if (counter >= text.length) {
        counter = 0;
      }
    }
  }

  render() {
    return (
      <div className="hero-container">
        <h1 style={{ zIndex: "10", fontSize: "10vw" }}>
          <div id="adjectives">Web</div>

          <div id="professions">Designer</div>
        </h1>
      </div>
    );
  }
}

export default HeroSection;
