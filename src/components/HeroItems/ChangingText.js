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
  });

  return (
    <div
      id="adjectives"
      style={{ fontFamily: "Staatliches", textTransform: "uppercase" }}
    >
      {props.text[0]}
    </div>
  );
};

export var ChangingText2 = (props) => {
  useEffect(() => {
    let text2 = props.text2;
    let elem = document.getElementById("adjectives2");
    let counter = 0;
    setInterval(change, 2500);
    function change() {
      elem.innerHTML = text2[counter];
      counter++;
      if (counter >= text2.length) {
        counter = 0;
      }
    }
  });

  return (
    <div
      id="adjectives2"
      style={{ fontFamily: "Staatliches", textTransform: "uppercase" }}
    >
      {props.text2[0]}
    </div>
  );
};
