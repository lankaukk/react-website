import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      {/* <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div> */}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              MCKAYLA LANKAU
              
            </Link>
          </div>
          <small class='website-rights'>MCKAYLA LANKAU © 2021</small>
          <div class='social-icons'>
            
            <ExternalLink class='social-icon-link instagram' href="https://www.instagram.com/forwardchaos/">
                <i class='fab fa-instagram' />
            </ExternalLink>

            <ExternalLink class='social-icon-link youtube' href="https://www.youtube.com/channel/UCmbbTQKwmwz_5rw6V9n-15g/featured">
                <i class='fab fa-youtube' />
            </ExternalLink>
            
            <ExternalLink class='social-icon-link linkedin' href="https://www.linkedin.com/in/mckayla-lankau/">
                <i class='fab fa-linkedin' />
            </ExternalLink>

            <ExternalLink class='social-icon-link github' href="https://github.com/lankaukk">
                <i class='fab fa-github' />
            </ExternalLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;