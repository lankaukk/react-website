import React from "react";
import "../../Gallery.css";
import { GalleryCard } from "../gallerycard.js";
import { useState, useEffect } from "react";

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

  const [focusBeach, setFocusBeach] = useState(false);

  const handleFocus = (artwork) => {
    setFocusBeach(!focusBeach);
    console.log(artwork);
  };

  return (
    <>
      <div className="gallery-container">
        {artworks.map((artwork) => (
          <GalleryCard
            title={artwork.title}
            imageUrl={artwork.imageUrl}
            date={artwork.date}
            medium={artwork.medium}
            onClick={() => handleFocus(artwork)}
          />
        ))}
      </div>

      {focusBeach ? (
        <div
          style={{
            background: "lime",
            position: "absolute",
            top: "10vh",
            left: "0",
            width: "100%",
            height: "90vh",
            zIndex: "100",
          }}
        >
          <GalleryCard
            title={focusBeach.title}
            imageUrl={focusBeach.imageUrl}
            date={focusBeach.date}
            medium={focusBeach.medium}
          />
        </div>
      ) : null}
    </>
  );
}

export default Gallery;
