import React from 'react';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='project__cards'>
      
      <div className='project__cards__container'>
        <div className='project__cards__wrapper'>
          <ul className='project__cards__items'>
            <CardItem
              src='images/typo-posters.jpg'
              text='Web App for generating your own digital typographic compositions'
              label='JavaScript App'
              path='/projects'
            />
            <CardItem
              src='images/journal-mockup.jpg'
              text='Interface Design and Prototype for Expressive Journaling Mobile App'
              label='UI Design'
              path='/projects'
            />
          </ul>

          <ul className='project__cards__items'>
            <CardItem
              src='images/_blank-playspace.gif'
              text='Contemporary Exploration about Social Media Consumption'
              label='Digital Experience'
              path='/projects'
            />
            <CardItem
              src='images/potions-catalog-cover-square.jpg'
              text='Speculative Catalog Selling Magic Potions'
              label='Editorial Design'
              path='/projects'
            />
            <CardItem
              src='images/protest-platform-map.gif'
              text='UI Design for Theoretical Social Media Platform for Protesters'
              label='Social Media'
              path='/projects'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;