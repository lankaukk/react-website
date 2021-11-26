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
              text='Web App for generating your own digital typographic compositions'
              label='JavaScript App'
              path='/'
            />
            <ProjectCardItem
              src='images/journal-mockup.jpg'
              text='Interface Design and Prototype for Expressive Journaling Mobile App'
              label='UI Design'
              path='/'
            />
            <ProjectCardItem
              src='images/protest-platform-map.gif'
              text='UI Design for Theoretical Social Media Platform for Protesters'
              label='Social Media'
              path='/'
            />
            </ul>

            <ul className='project__cards__items'>
            <ProjectCardItem
              src='images/_blank-playspace.gif'
              text='Contemporary Exploration about Social Media Consumption'
              label='Digital Experience'
              path='/'
            />
            <ProjectCardItem
              src='images/potions-catalog-cover-square.jpg'
              text='Speculative Catalog Selling Magic Potions'
              label='Editorial Design'
              path='/'
            />
            <ProjectCardItem
              src='images/protest-platform-map.gif'
              text='UI Design for Theoretical Social Media Platform for Protesters'
              label='Social Media'
              path='/'
            />
            </ul>


            <ul className='project__cards__items'>
            <ProjectCardItem
              src='images/potions-catalog-cover-square.jpg'
              text='Speculative Catalog Selling Magic Potions'
              label='Editorial Design'
              path='/'
            />
            
            <ProjectCardItem
              src='images/protest-platform-map.gif'
              text='UI Design for Theoretical Social Media Platform for Protesters'
              label='Social Media'
              path='/'
            />

            <ProjectCardItem
              src='images/protest-platform-map.gif'
              text='UI Design for Theoretical Social Media Platform for Protesters'
              label='Social Media'
              path='/'
            />
          </ul>
            </div>
        </div>
    </div>
  );
}

export default ProjectCards
