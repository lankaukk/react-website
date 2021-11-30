import React from 'react'
import '../../Gallery.css'

function Gallery() {
    return (
        <>
            <div className="gallery-container">
            <div class="row"> 

            {/* graphic posters */}
                <div class="column">
                    <img src="images/gallery/birth-of-the-moon.gif" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/earthjuice.jpg" width="100%" alt="gallery image" ></img>
                    <img src="images/gallery/marsjuice.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/moonscape.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/escape.jpg" width="100%" alt="gallery image"></img>
                </div>

            {/* mixed media */}
                <div class="column">
                    <img src="images/gallery/you-are-safe.jpg" width="100%" alt="gallery image" ></img>
                    <img src="images/gallery/cloud-sticker.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/leafcompillation.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/chaos-smudged.gif" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/forward.jpg" width="100%" alt="gallery image"></img>

                    <img src="images/gallery/ui-study.jpg" width="100%" alt="gallery image"></img>
                </div>


                <div class="column">
                    <img src="images/gallery/spinning-circles.gif" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/poster-1.1.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/poster-1.3.jpg" width="100%" alt="gallery image"></img>
            
                    <img src="images/gallery/gems.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/simulationplayground.jpg" width="100%" alt="gallery image"></img>
                    
                </div>

            {/* landscapes */}
                <div class="column">
                    <img src="images/gallery/fredonia.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/oldfield.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/greenlawn.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/sunflowers.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/reilly.jpg" width="100%" alt="gallery image"></img>
                    <img src="images/gallery/india.jpg" width="100%" alt="gallery image"></img>
                </div>
            </div>

            </div>
        </>
    )
}

export default Gallery;
