import React from "react";
import "../../Gallery.css";
import { useState, useEffect, useCallback } from "react";

var GalleryCard = (props) => {
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

function Gallery() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    let PROJECT_ID = "j1fgz8za";
    let DATASET = "production";
    let QUERY = encodeURIComponent('*[_type == "artwork"]');

    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        if (result.length > 0) {
          result.forEach((artwork) => {
            setArtworks((oldArray) => [...oldArray, artwork]);
          });
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="gallery-container">
        {artworks.map((artwork) => (
          <GalleryCard
            title={artwork.title}
            imageUrl={artwork.imageUrl}
            date={artwork.date}
            medium={artwork.medium}
          />
        ))}
      </div>
    </>
  );
}

export default Gallery;

// const handleShuffle = useCallback(() => {
//      setArtworks((artworks) => [...artworks].sort(() => Math.random() - 0.5));
//    }, []);

{
  /* <div className='bubble' onClick={handleShuffle}></div> */
}
