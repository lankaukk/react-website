import React from 'react'

function GalleryCardItem(props) {
    return (
        <div>
            <li className='gallery__item'>
                <figure className='gallery__item__pic-wrap' data-category={props.label}>
                    <img
                        className='gallery__item__pic'
                        alt='Gallery Image'
                        src={props.src}
                    />
            </figure>
            </li>
        </div>
    )
}

export default GalleryCardItem
