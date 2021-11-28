import React from 'react'
import '../../Gallery.css'
import Footer from '../Footer'
// import GalleryCards from '../GalleryCards'

function Gallery() {
    return (
        <>

            <div className="gallery-container">
            {/* <h1>Gallery</h1> */}

            <div class="row"> 

                <div class="column">
                    <img src="images/gallery/birth-of-the-moon.gif" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/earthjuice.jpg" width="100%" alt="gallery image" ></img>
                    <img src="images/gallery/marsjuice.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/moonscape.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/p9.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/p14.jpg" width="100%" alt="gallery image"></img>
                    
                </div>

                <div class="column">
                    <img src="images/gallery/p22.jpg" width="100%" alt="gallery image" ></img>
                    <img src="images/gallery/cloud-sticker.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/leafcompillation.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/p17.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/_blank-playspace.gif" width="100%" alt="gallery image"></img>
                    <img src="images/journal-mockup.jpg" width="100%" alt="gallery image"></img>
                </div>

                <div class="column">
                    <img src="images/typo-posters.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/pigeon-square.png" width="100%" alt="gallery image"></img>
                    <img src="images/_blank-playspace.gif" width="100%" alt="gallery image"></img>
                    <img src="images/journal-mockup.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/typo-posters.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/_blank-playspace.gif" width="100%" alt="gallery image"></img>
                </div>

                <div class="column">
                    <img src="images/pigeon-square.png" width="100%" alt="gallery image"></img>
                    <img src="images/_blank-playspace.gif" width="100%" alt="gallery image"></img>
                    <img src="images/journal-mockup.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/typo-posters.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/_blank-playspace.gif" width="100%" alt="gallery image"></img>
                    <img src="images/journal-mockup.jpg" width="100%" alt="gallery image" ></img>
                </div>
            </div>

            </div>

            <Footer />
        </>
    )
}

export default Gallery;
