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

            <p className="project-show-description">{props.label2}</p>
            <img
                className='project-show-pic'
                alt='Portfolio Image'
                src={props.src2}
            />
            <p className="project-show-description">{props.label3}</p>
             <img
                className='project-show-pic'
                alt='Portfolio Image'
                src={props.src3}
            />

            <br></br>

            <p className="project-show-description">{props.label4}</p>
            <iframe 
                className='project-show-pic' 
                src={props.src4}
                alt='Portfolio Video'
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>

            <br></br>

            <p className="project-show-description">{props.label5}</p>
            <div className="project-show-pics-container">
                <img
                    className='project-show-pics'
                    alt='Portfolio Image'
                    src={props.src5}
                />
                <img
                    className='project-show-pics'
                    alt='Portfolio Image'
                    src={props.src6}
                />
                <img
                    className='project-show-pics'
                    alt='Portfolio Image'
                    src={props.src7}
                />
            </div>
            
            <br></br><br></br><br></br><br></br>

            <p className="project-show-description ">{props.date}</p>

            

        </div>
    )
}

export default ProjectShow
