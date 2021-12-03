import React from 'react'
import ProjectShow from './ProjectShow'

function ProtestPlatform() {
    return (
        <div>
            <ProjectShow 
                title="Protest Platform"
                linkicon=""
                link=''

                src='/images/protest-platform-map.gif'

                description="UI Design for a theoretical social media platform for protesters around the world. Activists can post the contents of their picket signs onto a bulletin for their city, connect with each other and organize demonstarations. Users view the posts for other cities around the world, and see what they are experienceing. However to avoid foreign interferance, users can only participate on the bulletins for the city where they are located. True change comes from within."

                label2="Insipiration: Foreign influence operatives got tens of thousands of Americans to attend for their phony political events on Facebook, in wake of the 2016 US presidential election."
                src2='/images/projects/protest-platform/phony-events.png'
                label3='Example Bulletin (New York):'
                src3='/images/projects/protest-platform/landing-page.png'

                label4='Full Walkthrough:'
                src4='https://www.youtube.com/embed/aqr8Zd7W-Go'
                
                label5=''
                src5=''
                src6=''
                src7=''

                
                date="Fall, 2020"
            />
            <div className="supplemental-show-container">
                <p className="project-show-description">Login Page:</p>
                <img
                    className='project-show-pic'
                    alt='Portfolio Item'
                    src='/images/projects/protest-platform/login.png'
                />
                <p className="project-show-description">Horizontal Scroll effect on Bulletins:</p>
                <img
                    className='project-show-pic'
                    alt='Portfolio Item'
                    src='/images/projects/protest-platform/dashboard-scroll.gif'
                />
                <p className="project-show-description">Chat with other Protesters:</p>
                <img
                    className='project-show-pic'
                    alt='Portfolio Item'
                    src='/images/projects/protest-platform/chat.png'
                />
                <p className="project-show-description">Simple Language Translation:</p>
                <img
                    className='project-show-pic'
                    alt='Portfolio Item'
                    src='/images/projects/protest-platform/translation.gif'
                />
            </div>
        </div>
    )
}

export default ProtestPlatform
