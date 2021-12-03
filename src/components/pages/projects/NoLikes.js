import React from 'react'
import ProjectShow from './ProjectShow'

function NoLikes() {
    return (
        <div>
            <ProjectShow 
                title="No Likes"
                linkicon=""
                link=''

                src='/images/ig-likes.gif'

                description="No Likes is a simple Chrome Extension that Removes the Likes Feature on Instagram"

                label2="Before:"
                src2='/images/projects/nolikes/before-ext.gif'
                label3='After:'
                src3='/images/projects/nolikes/after-ext.gif'

                label4=''
                src4=''
                
                label5=''
                src5=''
                src6=''
                src7=''

                
                date="Spring, 2020"
            />
            <div className="supplemental-show-container">
                <p className="project-show-description">
                    <em>To Install on your computer:</em> <br></br><br></br>

                    1. Click to download <a class="link" href="https://cdn.glitch.com/729e3774-50e2-48d4-a932-ebec9ada9f8c%2Fchrome-ext-likes.zip?v=1588708795355" download="Chrome-ext-likes.zip">this folder</a>.<br></br><br></br>

                    2. Go to the Window tab in your chrome browser.<br></br><br></br>

                    3. Click on Extension.<br></br><br></br>

                    4. Make sure "Developer Mode" is turned on, click on "load unpacked" and upload the folder.<br></br><br></br>

                    5. Turn it on and enjoy your life, free of social validation!
                </p>
            </div>
        </div>
    )
}

export default NoLikes
