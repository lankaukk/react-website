import React from 'react'

function ProjectShow(props) {
    return (
        <div className="project-show-container">
            
            <h1 className='project-show-title'>{props.title}</h1>

            <p className="project-show-description ">
                <a href={props.gh} target="blank" >
                    <i class='fab fa-github' /> 
                    &nbsp;View on GitHub
                </a>
            </p>

            
            
            <img
                className='project-show-pic'
                alt='Portfolio Image'
                src={props.src}
            />

            <p className="project-show-description">{props.description}</p>

            <img
                className='project-show-pic'
                alt='Portfolio Image'
                src={props.src2}
            />
             <img
                className='project-show-pic'
                alt='Portfolio Image'
                src={props.src3}
            />

            <p className="project-show-description ">{props.date}</p>

            

        </div>
    )
}

export default ProjectShow
