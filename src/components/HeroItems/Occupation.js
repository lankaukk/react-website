import React, { Component } from "react";
import "../../App.css";

export class Occupation extends Component {
  componentDidMount() {
    const text0 = ["Interactive", "Graphic"];
    let elem0 = document.getElementById("adjectives");
    let mycounter = 0;
    setInterval(change2, 2000);
    function change2() {
      elem0.innerHTML = text0[mycounter];
      mycounter++;
      if (mycounter >= text0.length) {
        mycounter = 0;
      }
    }
  }

  render() {
    return (
      <div>
        <span
          id="adjectives"
          style={{ fontFamily: "Staatliches", textTransform: "uppercase" }}
        >
          Interactive
        </span>
      </div>
    );
  }
}
