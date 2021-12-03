import React from 'react'

function ProjectShow(props) {

    
    function ExternalLink(props) {
        const externalLink = props.linkicon;
        return (
            
            <p className="link">
            {externalLink == "GitHub" &&
                    <a href={props.link} target="blank" >
                        <i class='fab fa-github' /> 
                        &nbsp;View on {props.linkicon}
                    </a>
            }
            {externalLink == "Figma" &&
                    <a href={props.link} target="blank" >
                        <i class='fab fa-figma' /> 
                        &nbsp;View on {props.linkicon}
                    </a>
            }
            </p>
        );
    }

    function PicsPresent(props) {
        const pic2 = props.src2;
        return (
            <>
            {pic2.length > 0 &&
                <img
                    className='project-show-pic'
                    alt='Portfolio Image'
                    src={props.src2}
                />
            }
            </>
        );
    }
    function Pics3Present(props) {
        const pic3 = props.src3;
        return (
            <>
            {pic3.length > 0 &&
                <img
                    className='project-show-pic'
                    alt='Portfolio Image'
                    src={props.src3}
                />
            }
            </>
        );
    }

    function YoutubeLink(props) {
        const youtubelink = props.src4;
        return (
            <p className="project-show-description">{props.label4}
            {youtubelink.length > 0 && 
                <iframe 
                    className='project-show-pic' 
                    src={props.src4}
                    alt='Portfolio Video'
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            }
            </p>
        );
    }

    function TriPic(props) {
        const firstofthree = props.src5;
        return (
            <div className="project-show-pics-container">
            {firstofthree.length > 0 &&
                <div>
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
            }
            </div>
        )
    }


    return (
        <>
        <div className="project-show-container">
            
            <h1 className='project-show-title'>{props.title}</h1>

            <div className="link-and-date-container">
                <p className="date">{props.date}</p>
                {ExternalLink(props)}
            </div>

            <img
                className='project-show-pic'
                alt='Portfolio Image'
                src={props.src}
            />

            <p className="project-show-description">{props.description}</p>

            <br></br>

            <p className="project-show-description">{props.label2}</p>
            {PicsPresent(props)}
            <p className="project-show-description">{props.label3}</p>
            {Pics3Present(props)}

            <br></br>

            {YoutubeLink(props)}

            <p className="project-show-description">{props.label5}</p>
            {TriPic(props)}
            
        </div>
       
        </>
    )
}

export default ProjectShow
