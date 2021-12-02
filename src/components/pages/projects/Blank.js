import React from 'react'
import ProjectShow from './ProjectShow'

function Blank() {
    return (
        <div>
            
            <ProjectShow 
                title="_Blank: A Digital Experience"
                linkicon=""
                link=''

                src='/images/_blank-playspace.gif'

                description="_blank is a digital experience that explores contemporary social media consumption. The editorial website was made with video editing, CSS animations, JavaSAcript and jQuery. It uses the viewer’s webcam to place their own live video in the space. "

                label2="Walkthrough GIF:"
                src2='/images/projects/blank/walkthrough.gif'

                label3='It also exhibits documentation of a complementary physical installation:'
                src3='/images/projects/blank/install.gif'

                label4='The ultimate message to the audience that they need to be mindful of their online habits and personal relationships with technology. Over-stimulation leads to overwhelm.'
                src4=''
                
                label5='Other Key Screens:'
                src5=''
                src6=''
                src7=''

                date="Senior Thesis, 2020-2021"
            />

        <div className="supplemental-show-container">
            <img
                className='project-show-pic'
                alt='Portfolio Image'
                src='/images/projects/blank/phones-interaction.gif'
            />
            <img
                className='project-show-pic'
                alt='Portfolio Image'
                src='/images/projects/blank/desk-person.jpg'
            />
            <img
                className='project-show-pic'
                alt='Portfolio Image'
                src='/images/projects/blank/ending.gif'
            />
        </div>
        </div>


        

    )
}

export default Blank
