import React from "react";
import "../../Gallery.css";
import { GalleryCard } from "../gallerycard.js";
import { useState, useEffect } from "react";

function Gallery() {
  let PROJECT_ID = "j1fgz8za";
  let DATASET = "production";
  let QUERY = encodeURIComponent('*[_type == "artwork"]');

  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
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
