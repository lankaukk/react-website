import React from 'react'
import './ProjectCards.css';
import ProjectCardItem from './ProjectCardItem';

function ProjectCards() {
    
    return (
    <div className='project__cards'>

    <div className='project__cards__container'>
        <div className='project__cards__wrapper'>
          <ul className='project__cards__items'>

            <ProjectCardItem
              src='images/typo-posters.jpg'
              text='JavaScript Web App for generating your own digital typographic compositions'
              label='Typo'
              path='/projects/typo'
            />
            
            <ProjectCardItem
              src='images/journal-mockup.jpg'
              text='Interface Design and Prototype for Expressive Journaling Mobile App'
              label='Journaling App Design'
              path='/projects/journal-app-design'
            />
          </ul>

          <ul className='project__cards__items'>
            <ProjectCardItem
              src='images/_blank-playspace.gif'
              text='Digital Experience Exploring Contemporary Social Media Consumption'
              label='_blank'
              path='/projects/_blank'
            />
            <ProjectCardItem
              src='images/pexel-art.png'
              text='React App fetching from the Pexels API'
              label='Pexels Art'
              path='/projects/pexels-browser'
            />
            <ProjectCardItem
              src='images/ig-likes.gif'
              text='Chrome Extension for Removing Likes on Instagram'
              label='No Likes'
              path='/projects/no-likes'
            />
            </ul>


          <ul className='project__cards__items'>
            <ProjectCardItem
              src='images/pigeon-square.png'
              text='Snapchat filter using Augmented Reality to support the "Birds Arent Real Movement"'
              label='Robot Pigeon AR'
              path='/projects/robot-pigeon-ar'
            />
            <ProjectCardItem
              src='images/potions-catalog-cover-square.jpg'
              text='Editorial Design for a Speculative Catalog Selling Magic Potions'
              label='Modern Potions'
              path='/projects/modern-potions'
            />
            <ProjectCardItem
              src='images/protest-platform-map.gif'
              text='UI Design for Theoretical Social Media Platform for Protesters'
              label='Protest Platform'
              path='/projects/protest-platform'
            />
          </ul>

            </div>
        </div>
    </div>
  );
}

export default ProjectCards
