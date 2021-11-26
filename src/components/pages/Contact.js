import React from 'react'
import '../../App.css'
import Footer from '../Footer'

function Contact() {
    return (
        <>
        <div class="contact-container">
        <br></br>
            <h1 >Hi! My name's McKayla :)</h1>
            <br></br>
            <img
                class='pro-pic'
                src='images/pro-pic.jpg'
            />
            
            <p class="contact-description">I'm a JavaScript-based Web Developer and Web Designer from New York. Passionate about interdisciplinary collaboration, and creating meaningful digital products.</p>

            <p class="contact-description">
            Currently <a href="https://www.linkedin.com/in/mckayla-lankau/" target="_blank">Open To Work</a>, as well as for Website Commissions, and project Collaborations.
            </p>

            <p class="contact-description">
            These are some of my favorite tools, but I'm always learning more!
            </p>

            <div className="sticker-container">
                <img
                    class='sticker-item delay0'
                    src='images/stickers/ai.png'
                />
                <img
                    class='sticker-item delay1'
                    src='images/stickers/ps.png'
                />
                <img
                    class='sticker-item delay2'
                    src='images/stickers/indesign.png'
                />
                <img
                    class='sticker-item delay3'
                    src='images/stickers/adobecc.png'
                />
                <img
                    class='sticker-item delay4'
                    src='images/stickers/figma.png'
                />
                <img
                    class='sticker-item delay5'
                    src='images/stickers/github.png'
                />
                <img
                    class='sticker-item delay4'
                    src='images/stickers/js.png'
                />
                
                
                <img
                    class='sticker-item delay3'
                    src='images/stickers/slack.png'
                />
                <img
                    class='sticker-item delay2'
                    src='images/stickers/vscode.png'
                />
                <img
                    class='sticker-item delay1'
                    src='images/stickers/ruby.png'
                />
                <img
                    class='sticker-item delay0'
                    src='images/stickers/rails.png'
                />
                <img
                    class='sticker-item delay1'
                    src='images/stickers/jquery.png'
                />
                <img
                    class='sticker-item delay2'
                    src='images/stickers/react.png'
                />
                <img
                    class='sticker-item delay3'
                    src='images/stickers/redux.png'
                />
                
                <img
                    class='sticker-item'
                    src='images/stickers/html.png'
                />
                <img
                    class='sticker-item'
                    src='images/stickers/css.png'
                />
                <img
                    class='sticker-item'
                    src='images/stickers/scss.png'
                />
            </div>
            
            <p class="contact-description">
            Feel free to send me and email (mckaylalankau@gmail.com), LinkedIn Message, or DM if you would like to work together, or just to say hi!
            </p>

            <br></br><br></br>

            
        </div>
        <Footer />
        </>
    )
}

export default Contact;