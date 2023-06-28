import React from "react";
import "./masonry.css";

var GalleryCard = (props) => {
  const date = props.date;
  const year = date.slice(0, 4);

  return (
    <div className="card-holder">
      <img src={props.imageUrl} alt="gallery item" />
      <div>
        <div>{props.title}</div>
        <div>
          {props.medium}, {year}
        </div>
      </div>
    </div>
  );
};

export default function Gallery(props) {
  const artworks = props.artworks

  return (
    <div className="gallery-container">
      {artworks.map((artwork) => (
        <GalleryCard
          key={artwork.id} // Make sure to provide a unique key
          title={artwork.title}
          imageUrl={artwork.imageUrl}
          date={artwork.date}
          medium={artwork.medium}
        />
      ))}
    </div>
  );
}

// const handleShuffle = useCallback(() => {
//      setArtworks((artworks) => [...artworks].sort(() => Math.random() - 0.5));
//    }, []);

/* <div className='bubble' onClick={handleShuffle}></div> */
