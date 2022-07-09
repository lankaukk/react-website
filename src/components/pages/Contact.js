import React from "react";
import "../../Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-heading">
          <h1 className="hi">Hi! I'm McKayla 👩‍💻</h1>
          <img class="pro-pic" src="images/pro-pic.jpg" alt="selfie" />
        </div>

        <div class="contact-description">
          If you would like your own website like this, you're interested in
          collaborating, or you just want to chat about design and web development...
          ☕<br></br> <br></br>
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
        <img
          class="sticker delay0"
          src="images/stickers/ai.png"
          alt="sticker"
        />
        <img
          class="sticker delay1"
          src="images/stickers/ps.png"
          alt="sticker"
        />
        <img
          class="sticker delay2"
          src="images/stickers/indesign.png"
          alt="sticker"
        />
        <img
          class="sticker delay4"
          src="images/stickers/figma.png"
          alt="sticker"
        />
        <img
          class="sticker delay5"
          src="images/stickers/github.png"
          alt="sticker"
        />
        <img
          class="sticker delay4"
          src="images/stickers/git.png"
          alt="sticker"
        />
        <img
          class="sticker delay3"
          src="images/stickers/js.png"
          alt="sticker"
        />
        <img
          class="sticker delay1"
          src="images/stickers/vscode.png"
          alt="sticker"
        />
        <img
          class="sticker delay0"
          src="images/stickers/ruby.png"
          alt="sticker"
        />
        <img
          class="sticker delay1"
          src="images/stickers/rails.png"
          alt="sticker"
        />
        <img
          class="sticker delay2"
          src="images/stickers/jquery.png"
          alt="sticker"
        />
        <img
          class="sticker delay3"
          src="images/stickers/react.png"
          alt="sticker"
        />
        <img
          class="sticker delay4"
          src="images/stickers/redux.png"
          alt="sticker"
        />

        <img
          class="sticker delay5"
          src="images/stickers/html.png"
          alt="sticker"
        />
        <img
          class="sticker delay4"
          src="images/stickers/css.png"
          alt="sticker"
        />
        <img
          class="sticker delay3"
          src="images/stickers/scss.png"
          alt="sticker"
        />
      </div>
    </>
  );
}
