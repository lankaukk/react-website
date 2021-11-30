import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Project from './pages/Project';

function ProjectCardItem(props) {
    return (
        <>
            
            <li className='project__cards__item'>
                <Link className='project__cards__item__link' to={props.path} >
                <figure className='project__cards__item__pic-wrap' data-category={props.label}>
                    <img
                    className='project__cards__item__img'
                    alt='Portfolio Image'
                    src={props.src}
                    />
                </figure>
                <div className='project__cards__item__info'>
                    <h5 className='project__cards__item__text'>{props.text}</h5>
                </div>
                </Link>
            </li>
            
                
        </>
    )
}

export default ProjectCardItem
