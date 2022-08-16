import React from "react";

export var GalleryCard = (props) => {
  return (
    <div>
      <div className="card-holder" >
        <img
          src={props.imageUrl}
          alt="gallery item"
          style={{ width: "100%" }}
        ></img>
        <div
          style={{
            padding: 15,
            display: "flex",
            flexDirection: "column",
            gap: ".3em",
            color: "rgb(28, 28, 28)",
            background: "white",
          }}
        >
          <div>{props.title}</div>
          <div style={{ fontSize: ".7em" }}>
            {props.medium}, {props.date}
          </div>
        </div>
      </div>
    </div>
  );
};
