import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    window.open('https://customer-assets.emergentagent.com/job_f8f20ced-ff20-49b6-9a88-d97fafa816b5/artifacts/34978cw7_Vinod_Badgujar2026.pdf', '_blank');
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className={`hero-content ${visible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            <span className="hero-title-line">VINOD</span>
            <span className="hero-title-line">BADGUJAR</span>
          </h1>
          <p className="hero-description">
            Hi there! I'm a software engineer with a background in computer engineering. I have experience working with DevOps tools such as Jenkins, GIT, Docker, Linux, Kubernetes, Terraform, GitHub Actions and cloud providers like GCP. Additionally, I have a strong foundation in object-oriented programming concepts, Java programming, and data structures and algorithms. I have worked on projects which involve technologies like Flutter, ML, Deep Learning, and Python. I'm passionate about exploring new technologies and finding creative solutions to complex problems.
          </p>
          <div className="hero-actions">
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Get In Touch
            </button>
          </div>
          <div className="hero-social">
            <a href="https://github.com/vinodbadgujar" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/vinodbadgujar" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vbadgujar1999@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <button onClick={() => scrollToSection('about')} className="scroll-indicator">
          <ChevronDown size={24} className="scroll-arrow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;