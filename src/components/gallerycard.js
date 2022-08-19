import React from "react";

export var GalleryCard = (props) => {
  const date = props.date;
  const year = date.slice(0, 4);

  return (
    <div>
      <div className="card-holder">
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
            color: "black",
            background: "white",
          }}
        >
          <div style={{ fontSize: ".9em" }}>{props.title}</div>
          <div style={{ fontSize: ".7em" }}>
            {props.medium}, {year}
          </div>
        </div>
      </div>
    </div>
  );
};
