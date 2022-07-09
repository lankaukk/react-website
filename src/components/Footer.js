import React from "react";
import "./Footer.css";
import { ExternalLink } from "react-external-link";

function Footer() {
  return (
    <div className="footer-container">
      <small class="website-rights">MCKAYLA LANKAU © 2022</small>
      <div class="social-icons">
        <ExternalLink
          class="social-icon-link instagram"
          href="https://www.instagram.com/forwardchaos/"
        >
          <i class="fab fa-instagram" />
        </ExternalLink>

        <ExternalLink
          class="social-icon-link linkedin"
          href="https://www.linkedin.com/in/mckayla-lankau/"
        >
          <i class="fab fa-linkedin" />
        </ExternalLink>

        <ExternalLink
          class="social-icon-link github"
          href="https://github.com/lankaukk"
        >
          <i class="fab fa-github" />
        </ExternalLink>
      </div>
    </div>
  );
}

export default Footer;
