import React from 'react'
import ProjectShow from './ProjectShow'
import './ProjectShow.css'

function Typo() {
    return (
        <div>
            
            <ProjectShow 
                title="Typo"
                src='/images/typo-posters.jpg'
                description="Typo is a web application for generating your own digital typographic compositions. There is a gallery where you can save your favorite works, and view those created by others. The frontend is built with HTML, CSS, and JavaScript, and it communicates with a backend API that is built with Ruby and Rails.
                "
                src2='/images/typo-posters.jpg'
                src3='/images/typo-posters.jpg'
                gh='https://github.com/lankaukk/typo-app'
                date="Fall, 2021"
            />
        </div>
    )
}

export default Typo
