import React from 'react'
import ProjectShow from './ProjectShow'

function RobotPigeonAR() {
    return (
        <div>
            <ProjectShow 
                title="Robot Pigeon AR"
                linkicon=""
                link=''

                src='/images/pigeon-square.png'

                description="This project is inspired by the 
               
                Birds Arent Real movement 
                
                The goal of the movement is to make everyone aware of the fact that the government has replaced every living bird with robotic replicas. This Snap Lens utilizes Augmented Reality to help people to see the truth for themselves."

                label2="Made using Snapchat's Lens Studio:"
                src2='/images/projects/pigeon/robot-pigeon-process.png'
                label3='Pigeons are everywhere in New York City, why?'
                src3='/images/projects/pigeon/pigeons-nyc.jpg'

                label4=''
                src4=''
                
                label5='Because there are a lot of people to spy on.'
                src5='/images/projects/pigeon/pigeon-mailbox.jpeg'
                src6='/images/projects/pigeon/pigeon-subway.jpeg'
                src7='/images/projects/pigeon/pigeon-sidewalk.jpeg'

                
                date="Fall, 2020"
            />
            <br></br><br></br>
            <div className="supplemental-show-container">
                <p>Scan to Try on Snapchat!</p>
                <br></br>
                <img
                    className=''
                    alt='Portfolio Image'
                    src='/images/projects/pigeon/robot-pigeon-snapcode.png'
                    width="200px"
                />
            </div>
        </div>
    )
}

export default RobotPigeonAR
