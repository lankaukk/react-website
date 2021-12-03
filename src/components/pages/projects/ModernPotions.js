import React from 'react'
import ProjectShow from './ProjectShow'

function ModernPotions() {
    return (
        <div>
            <ProjectShow 
                title="Modern Potions"
                linkicon=""
                link=''

                src='/images/potions-catalog-cover-square.jpg'

                description="Modern Potions is a speculative catalog selling the season's most potent magic potions. It's essential reading material for influential witches and humans alike."

                label2="Front and Back Covers:"
                src2='/images/projects/modern-potions/covers.jpeg'
                label3='Flip through Mock-up:'
                src3='/images/projects/modern-potions/potions.gif'

                label4=''
                src4=''
                
                label5='Key Spreads:'
                src5=''
                src6=''
                src7=''

                
                date="Spring, 2020"
            />
            <div className="supplemental-show-container">
            <img
                className='project-show-pic'
                alt='Portfolio Item'
                src='/images/projects/modern-potions/contents.jpeg'
            />
            <img
                className='project-show-pic'
                alt='Portfolio Item'
                src='/images/projects/modern-potions/essentiasl-spread.jpeg'
            />
            <img
                className='project-show-pic'
                alt='Portfolio Item'
                src='/images/projects/modern-potions/day-dream-shot.jpeg'
            />
        </div>
        </div>
    )

}

export default ModernPotions
