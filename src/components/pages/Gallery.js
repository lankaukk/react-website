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
                    <img src="images/_blank-playspace.gif" width="100%"></img>
                    <img src="images/journal-mockup.jpg" width="100%" ></img>
                    <img src="images/typo-posters.jpg" width="100%"></img>
                    <img src="images/pigeon-square.png" width="100%"></img>
                    <img src="images/_blank-playspace.gif" width="100%"></img>
                    <img src="images/journal-mockup.jpg" width="100%"></img>
                    <img src="images/typo-posters.jpg" width="100%"></img>
                </div>
                <div class="column">
                    
                    <img src="images/journal-mockup.jpg" width="100%" ></img>
                    <img src="images/typo-posters.jpg" width="100%"></img>
                    <img src="images/pigeon-square.png" width="100%"></img>
                    <img src="images/_blank-playspace.gif" width="100%"></img>
                    <img src="images/journal-mockup.jpg" width="100%"></img>
                    <img src="images/typo-posters.jpg" width="100%"></img>
                    <img src="images/_blank-playspace.gif" width="100%"></img>
                </div>
                <div class="column">
                    
                    <img src="images/typo-posters.jpg" width="100%"></img>
                    <img src="images/pigeon-square.png" width="100%"></img>
                    <img src="images/_blank-playspace.gif" width="100%"></img>
                    <img src="images/journal-mockup.jpg" width="100%"></img>
                    <img src="images/typo-posters.jpg" width="100%"></img>
                    <img src="images/_blank-playspace.gif" width="100%"></img>
                    <img src="images/journal-mockup.jpg" width="100%" ></img>
                </div>
                <div class="column">
                    
                    <img src="images/pigeon-square.png" width="100%"></img>
                    <img src="images/_blank-playspace.gif" width="100%"></img>
                    <img src="images/journal-mockup.jpg" width="100%"></img>
                    <img src="images/typo-posters.jpg" width="100%"></img>
                    <img src="images/_blank-playspace.gif" width="100%"></img>
                    <img src="images/journal-mockup.jpg" width="100%" ></img>
                    <img src="images/typo-posters.jpg" width="100%"></img>
                </div>
            </div>

            </div>

            <Footer />
        </>
    )
}

export default Gallery;
