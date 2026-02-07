import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import '../styles/Experience.css';

const Experience = () => {
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

  const experiences = [
    {
      company: 'Deloitte',
      role: 'DevOps Consultant',
      period: 'July 2025 - Present',
      location: 'Pune, Maharashtra',
      responsibilities: [
        'Engineering complex Autosys automation workflows for end-to-end generation of EQRMS reports',
        'Orchestrating microservices on OpenShift, managing pod scaling, configurations, and health checks',
        'Driving continuous delivery using TeamCity and uDeploy for risk application code deployment',
        'Troubleshooting production incidents in containerized ecosystems using OpenShift diagnostics'
      ]
    },
    {
      company: 'Accenture',
      role: 'Sr Cloud DevOps Engineer',
      period: 'July 2021 - July 2025',
      location: 'Pune, Maharashtra',
      responsibilities: [
        'Designed and developed end-to-end CI/CD pipelines on Jenkins and Azure DevOps',
        'Managed application infrastructure using Terraform on GCP and Azure cloud providers',
        'Created wrapper framework around Terraform for efficient resource declaration',
        'Privatized network infrastructure on GCP cloud, adhering to zero trust security policies',
        'Deployed artifacts (DAGs, Data pipelines, Microservices, Application UIs) across cloud platforms',
        'Developed automation solutions using Python and Bash to reduce operational toil',
        'Implemented POCs for IaaS, PaaS, and Serverless cloud service workflows'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="experience-container">
        <div className={`experience-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">MY JOURNEY</span>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header-row">
                    <div className="company-info">
                      <Briefcase size={24} className="company-icon" />
                      <div>
                        <h3 className="company-name">{exp.company}</h3>
                        <p className="role-title">{exp.role}</p>
                      </div>
                    </div>
                    <div className="period-info">
                      <Calendar size={18} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="location">{exp.location}</p>
                  <ul className="responsibilities">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;