import React from "react";
import { useEffect } from "react";
import "../../App.css";

export var ChangingText = (props) => {

  useEffect(() => {
    let text = props.text;
    let elem = document.getElementById("adjectives");
    let counter = 0;
    setInterval(change, 2500);
    function change() {
      elem.innerHTML = text[counter];
      counter++;
      if (counter >= text.length) {
        counter = 0;
      }
    }
  }, []);

    return (
      <div>
        <span
          id="adjectives"
          style={{ fontFamily: "Staatliches", textTransform: "uppercase" }}
        >
          {props.text[0]}
        </span>
      </div>
    )
  
}
