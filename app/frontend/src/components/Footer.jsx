import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-circle">V</div>
            <p className="footer-tagline">
              Software Engineer specializing in cloud infrastructure, DevOps, and automation
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-list">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#certifications">Certifications</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Connect</h4>
              <div className="footer-social">
                <a href="https://github.com/vinodbadgujar" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/vinodbadgujar" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:vbadgujar1999@gmail.com" className="footer-social-link">
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Vinod Badgujar. All rights reserved.
          </p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;