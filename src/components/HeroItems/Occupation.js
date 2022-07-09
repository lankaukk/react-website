import React, { Component } from "react";
import "../../App.css";

export class Occupation extends Component {
  componentDidMount() {
    const text0 = ["Web ", "UI ", "Digital ", "UX "];
    let elem0 = document.getElementById("adjectives");
    let mycounter = 0;
    setInterval(change2, 900);
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
    setInterval(change, 1100);
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
      <div
        style={{
          fontSize: "4.5em",
          position: "absolute",
          top: "60%",
          left: "5%",
        }}
      >
        <span
          id="adjectives"
          style={{ fontFamily: "Staatliches", textTransform: "uppercase" }}
        >
          Web{" "}
        </span>
        <span
          id="professions"
          style={{ fontFamily: "Staatliches", textTransform: "uppercase" }}
        >
          Designer
        </span>
      </div>
    );
  }
}
