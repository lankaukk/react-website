import React from 'react'
import GalleryCardItem from './GalleryCardItem'
import './GalleryCards.css'

function GalleryCards() {
    return (
        <div className="gallery">
            <div className='gallery__cards__container'>
                <div className='gallery__cards__wrapper'>
                    <ul className='gallery__items'>
                        <GalleryCardItem
                            src='images/typo-posters.jpg'
                            text='x'
                            label='x'
                        />
                        <GalleryCardItem
                            src='images/protest-platform-map.gif'
                            text='x'
                            label='x'
                        />
                        <GalleryCardItem
                            src='images/typo-posters.jpg'
                            text='x'
                            label='x'
                        />
                        <GalleryCardItem
                            src='images/protest-platform-map.gif'
                            text='x'
                            label='x'
                        />
                    </ul>
                    <ul className='gallery__items'>
                        <GalleryCardItem
                            src='images/typo-posters.jpg'
                            text='x'
                            label='x'
                        />
                        <GalleryCardItem
                            src='images/protest-platform-map.gif'
                            text='x'
                            label='x'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GalleryCards
