import React, { useEffect, useRef, useState } from 'react';
import { Code2, Cloud, Boxes, Workflow } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const highlights = [
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Architecture',
      description: 'Expert in GCP & Azure cloud infrastructure design and implementation'
    },
    {
      icon: <Workflow size={32} />,
      title: 'CI/CD Pipelines',
      description: 'Automated deployment workflows using Jenkins, Azure DevOps & TeamCity'
    },
    {
      icon: <Boxes size={32} />,
      title: 'Container Orchestration',
      description: 'Kubernetes, OpenShift & Docker for microservices management'
    },
    {
      icon: <Code2 size={32} />,
      title: 'Infrastructure as Code',
      description: 'Terraform expert with custom framework development experience'
    }
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className={`about-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">WHO I AM</span>
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-text">
            <p className="about-paragraph">
              I'm a <strong>Cloud DevOps Engineer</strong> with 4.5+ years of experience, currently working as a 
              DevOps Consultant at <strong>Deloitte</strong>. Previously, I spent 4 years at <strong>Accenture</strong> 
              as a Senior Cloud DevOps Engineer.
            </p>
            <p className="about-paragraph">
              My expertise lies in architecting and managing cloud infrastructure across <strong>GCP and Azure</strong>, 
              designing end-to-end <strong>CI/CD pipelines</strong>, and orchestrating containerized applications using 
              <strong>Kubernetes and OpenShift</strong>. I'm passionate about automation, infrastructure as code, 
              and building scalable, reliable systems.
            </p>
            <p className="about-paragraph">
              I hold multiple <strong>Google Cloud certifications</strong> including Professional Cloud Architect 
              and Professional Cloud DevOps Engineer, demonstrating my deep expertise in cloud technologies.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="highlight-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="highlight-icon">{highlight.icon}</div>
                <h3 className="highlight-title">{highlight.title}</h3>
                <p className="highlight-description">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;