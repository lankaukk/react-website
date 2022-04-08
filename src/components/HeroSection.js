import React from "react";
import { Component } from "react/cjs/react.production.min";
import "../App.css";
import "./HeroSection.css";

class HeroSection extends Component {
  componentDidMount() {
    const text0 = [" Web", " UI", " Digital", " UX"];
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

    const text = [" Designer", " Developer", " Artist", " Engineer"];
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
        <div className="hero-left">
          <div className="hero-left-left">
            <div className="greeting">
              Hi, my name's McKayla and I'm a<span id="adjectives"> Web</span>
              <span id="professions"> Designer</span>.
            </div>
            <div className="cool-vid">
              <img
                src="images/gallery/escape.jpg"
                alt="escape"
                width="100%"
                height="100%"
              ></img>
            </div>
          </div>
          <div className="hero-left-right"></div>
        </div>
        <div className="hero-right">
          <div className="hero-right-top">
            <div className="cool-pattern"></div>
            <div className="cool-mockup"></div>
          </div>
          <div className="hero-right-bottom">
            <img
              src="images/protest-platform-map.gif"
              alt="escape"
              height="100%"
              id="map"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSection;
