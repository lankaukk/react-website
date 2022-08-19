import React from "react";
import "./Footer.css";
import { ExternalLink } from "react-external-link";

function Footer() {
  return (
    <div className="footer-container">
      <small className="website-rights">MCKAYLA<span style={{opacity: 0}}>_</span>LANKAU<span style={{opacity: 0}}>_</span>©<span style={{opacity: 0}}>_</span>2022</small>
      <div className="social-icons">
        <ExternalLink
          className="social-icon-link instagram"
          href="https://www.instagram.com/forwardchaos/"
        >
          <i className="fab fa-instagram" />
        </ExternalLink>

        <ExternalLink
          className="social-icon-link linkedin"
          href="https://www.linkedin.com/in/mckayla-lankau/"
        >
          <i className="fab fa-linkedin" />
        </ExternalLink>

        <ExternalLink
          className="social-icon-link github"
          href="https://github.com/lankaukk"
        >
          <i className="fab fa-github" />
        </ExternalLink>
      </div>
    </div>
  );
}

export default Footer;
