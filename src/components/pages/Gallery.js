import React from "react";
import "../../Gallery.css";
import { GalleryCard } from "../gallerycard.js";
import { useState, useEffect, useCallback } from "react";

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

  const handleShuffle = useCallback(() => {
    setArtworks((artworks) => [...artworks].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <>
      <div className='bubble' onClick={handleShuffle}></div>
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
