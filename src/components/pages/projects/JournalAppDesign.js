import React from 'react'
import ProjectShow from './ProjectShow'

function JournalAppDesign() {
    return (
        <div>
            
            <ProjectShow 
                title="Journaling App UI"
                linkicon=""
                link=''

                src='/images/journal-mockup.jpg'

                description="Keeping a journal has countless benefits for both creativity and mental health. This Digital Application is a simple, colorful, customizable journal intended for phone screens. When users make an entry, they get to choose the background color, the text color, and the font. A block representing that entry is then stacked ontop of previous entries, if any, creating a layered pattern of colored pages."

                label2="User Persona:"
                src2='/images/projects/journal-app-design/user-persona.jpg'
                label3='Mood Board:'
                src3='/images/projects/journal-app-design/Mood-Board.png'

                label4='Walkthrough Video:'
                src4='https://www.youtube.com/embed/z1kdNRZ_tug'
                
                label5='Key Screens:'
                src5='/images/projects/journal-app-design/journal-screen-2.png'
                src6='/images/projects/journal-app-design/journal-screen-4.png'
                src7='/images/projects/journal-app-design/journal-screen-5.png'

                
                date="Fall, 2021"
            />
        </div>
    )
}

export default JournalAppDesign
