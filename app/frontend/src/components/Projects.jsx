import React, { useEffect, useRef, useState } from 'react';
import { Folder, GitBranch, Cloud, Container, Settings } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const projects = [
    {
      title: 'Enterprise CI/CD Pipeline Automation',
      description: 'Designed and implemented comprehensive CI/CD pipelines on Jenkins and Azure DevOps, enabling automated testing, building, and deployment across multiple environments.',
      icon: <GitBranch size={32} />,
      technologies: ['Jenkins', 'Azure DevOps', 'Docker', 'Kubernetes', 'SonarQube'],
      highlights: [
        'Reduced deployment time by 60%',
        'Automated testing and quality gates',
        'Multi-environment deployment strategy'
      ]
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Managed end-to-end application infrastructure using Terraform across GCP and Azure, implementing infrastructure as code best practices.',
      icon: <Cloud size={32} />,
      technologies: ['Terraform', 'GCP', 'Azure', 'Python', 'Bash'],
      highlights: [
        'Created wrapper framework for Terraform',
        'Zero-downtime infrastructure updates',
        'Cost optimization strategies implemented'
      ]
    },
    {
      title: 'Microservices Orchestration Platform',
      description: 'Orchestrated microservices on OpenShift, managing pod scaling, configurations, and health checks for high-availability critical risk platforms.',
      icon: <Container size={32} />,
      technologies: ['OpenShift', 'Kubernetes', 'Docker', 'Helm', 'Autosys'],
      highlights: [
        'Achieved 99.9% uptime',
        'Automated scaling and self-healing',
        'Real-time monitoring and alerting'
      ]
    },
    {
      title: 'Automation & Efficiency Solutions',
      description: 'Developed automation solutions using Python and Bash that significantly reduced operational toil and enhanced team efficiency.',
      icon: <Settings size={32} />,
      technologies: ['Python', 'Bash', 'Flask', 'MongoDB', 'REST APIs'],
      highlights: [
        'Reduced manual tasks by 70%',
        'Custom monitoring dashboards',
        'Automated incident response workflows'
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        <div className={`projects-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">SELECTED WORK</span>
          <h2 className="section-title">Key Projects</h2>
          <p className="projects-subtitle">Notable initiatives and implementations from my professional experience</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-icon-wrapper">
                <div className="project-icon">{project.icon}</div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <span className="highlight-bullet">•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;