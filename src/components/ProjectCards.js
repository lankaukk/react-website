import React from 'react'
import './ProjectCards.css';
import ProjectCardItem from './ProjectCardItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

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
              path='/'
            />
            
            <ProjectCardItem
              src='images/journal-mockup.jpg'
              text='Interface Design and Prototype for Expressive Journaling Mobile App'
              label='Journaling App Design'
              path='/'
            />
          </ul>

          <ul className='project__cards__items'>
            <ProjectCardItem
              src='images/_blank-playspace.gif'
              text='Digital Experience Exploring Contemporary Social Media Consumption'
              label='_blank'
              path='/'
            />
            <ProjectCardItem
              src='images/pexels-browser.gif'
              text='React App fetching from the Pexels API'
              label='Pexels Browser'
              path='/'
            />
            <ProjectCardItem
              src='images/ig-likes.gif'
              text='Chrome Extension for Removing Likes on Instagram'
              label='No Likes'
              path='/'
            />
            </ul>


          <ul className='project__cards__items'>
            <ProjectCardItem
              src='images/pigeon-square.png'
              text='Snapchat filter using Augmented Reality to support the "Birds Arent Real Movement"'
              label='Robot Pigeon AR'
              path='/'
            />
            <ProjectCardItem
              src='images/potions-catalog-cover-square.jpg'
              text='Editorial Design for a Speculative Catalog Selling Magic Potions'
              label='Modern Potions'
              path='/'
            />
            <ProjectCardItem
              src='images/protest-platform-map.gif'
              text='UI Design for Theoretical Social Media Platform for Protesters'
              label='Protest Platform'
              path='/'
            />
          </ul>

            </div>
        </div>
    </div>
  );
}

export default ProjectCards
