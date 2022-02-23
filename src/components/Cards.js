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
              label='Typo'
              path='/projects/typo'
            />
            <CardItem
              src='images/journal-mockup.jpg'
              text='Interface Design and Prototype for Expressive Journaling Mobile App'
              label='Journaling App Design'
              path='/projects/journal-app-design'
            />
          </ul>

          <ul className='project__cards__items'>
            <CardItem
              src='images/_blank-playspace.gif'
              text='Digital Experience Exploring Contemporary about Social Media Consumption'
              label='_blank'
              path='/projects/_blank'
            />
           <CardItem
              src='images/pexel-art.png'
              text='React App fetching from the Pexels API'
              label='Pexels Art'
              path='/projects/pexels-browser'
            />
            <CardItem
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

export default Cards;