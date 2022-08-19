import React from "react";
import "../../Contact.css";
import { useState, useEffect } from "react";

export default function Contact() {
  const [softwares, setSoftwares] = useState([]);

  useEffect(() => {
    let PROJECT_ID = "j1fgz8za";
    let DATASET = "production";
    let QUERY = encodeURIComponent('*[_type == "software"]');

    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        setSoftwares([])
        if (result.length > 0) {
          result.forEach((software) => {
            setSoftwares((oldArray) => [...oldArray, software]);
          });
        }
      })
      .catch((err) => console.error(err));
  }, []);

  function getRandomInt(max) {
    console.log(Math.floor(Math.random() * max) + 's');
    return Math.floor(Math.random() * max) + 's';
  }

  return (
    <>
      <div className="contact-container">
        <div className="contact-heading">
          <div className="hi">Hi! I'm McKayla 👩‍💻</div>
          <img class="pro-pic" src="images/pro-pic.jpg" alt="selfie" />
        </div>

        <div class="contact-description">
          If you would like your own website like this, you're interested in
          collaborating, or you just want to chat about design and web
          development... ☕<br></br> <br></br>
          Email me at{" "}
          <a href="mailto: mckaylalankau@gmail.com">
            mckaylalankau@gmail.com
          </a>{" "}
          <br></br>
          Or DM me on{" "}
          <a href="https://www.linkedin.com/in/mckayla-lankau/">LinkedIn</a>
        </div>
      </div>
      <div className="sticker-container">
        {softwares.map((software) => (
          <img className="sticker" src={software.imageUrl} alt="sticker" style={{animationDelay: getRandomInt(-7)}}/>
        ))}
      </div>
    </>
  );
}
