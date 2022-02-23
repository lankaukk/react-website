import React from 'react'
import ProjectShow from './ProjectShow'

function PexelsBrowser() {
    return (
        <div className='project-show-container'>
            <ProjectShow 
                title="Pexels Art"
                linkicon="GitHub"
                link='https://github.com/lankaukk/pexels-art'

                src='/images/pexels-art.gif'

                description="Pexels Art is a React App that fetches from the Pexels API. The typed words serve as a search query for their database of images. Using the 'average color' attribute of the response, abstract artwork is created. 🎨"

                label2=""
                src2=''
                label3=''
                src3=''

                label4=''
                src4=''
                
                label5=''
                src5=''
                src6=''
                src7=''

                
                date="2022"
            />
            <a href='https://pexel-art.netlify.app/'>Make your own Pexel Art!</a>
        </div>
    )
}

export default PexelsBrowser
