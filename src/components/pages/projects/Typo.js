import React from 'react'
import ProjectShow from './ProjectShow'
import './ProjectShow.css'

function Typo() {
    return (
        <div>
            
            <ProjectShow 
                title="Typo"
                linkicon="GitHub"
                link='https://github.com/lankaukk/typo-app'

                src='/images/typo-posters.jpg'

                description="Typo is a web application for generating your own digital typographic compositions. There is a gallery where you can save your favorite works, and view those created by others. The frontend is built with HTML, CSS, and JavaScript, and it communicates with a backend API that is built with Ruby and Rails."

                label2="Interface Design:"
                src2='/images/projects/typo/typo-interface-1.png'
                label3=''
                src3='/images/projects/typo/typo-interface-2.png'

                label4='Walkthrough Video:'
                src4='https://www.youtube.com/embed/1N06yzaWQY8'
                
                label5='Download your compositions and print them out!'
                src5='/images/projects/typo/typo-printing.gif'
                src6='/images/projects/typo/typo-poster-1.jpg'
                src7='/images/projects/typo/typo-posters-angle.jpg'

                
                date="Fall, 2021"
            />
        </div>
    )
}

export default Typo
