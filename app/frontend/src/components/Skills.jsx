import React, { useEffect, useRef, useState } from 'react';
import { Cloud, Container, Settings, Database, Code, GitBranch, Server, Shield } from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      category: 'Cloud Platforms',
      icon: <Cloud size={28} />,
      skills: ['Google Cloud Platform (GCP)', 'Microsoft Azure', 'AWS']
    },
    {
      category: 'Container & Orchestration',
      icon: <Container size={28} />,
      skills: ['Kubernetes', 'Docker', 'OpenShift', 'Helm']
    },
    {
      category: 'CI/CD Tools',
      icon: <GitBranch size={28} />,
      skills: ['Jenkins', 'Azure DevOps', 'TeamCity', 'uDeploy', 'GitHub Actions']
    },
    {
      category: 'Infrastructure as Code',
      icon: <Settings size={28} />,
      skills: ['Terraform', 'Ansible', 'CloudFormation']
    },
    {
      category: 'Programming Languages',
      icon: <Code size={28} />,
      skills: ['Python', 'Bash', 'Go Lang', 'Java', 'SQL']
    },
    {
      category: 'Databases',
      icon: <Database size={28} />,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis']
    },
    {
      category: 'Monitoring & Logging',
      icon: <Server size={28} />,
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
    },
    {
      category: 'Security & Compliance',
      icon: <Shield size={28} />,
      skills: ['Zero Trust Security', 'IAM', 'Network Security', 'SonarQube']
    }
  ];

  const tools = [
    'Git/GitHub', 'Maven', 'SonarQube', 'VS Code', 'Autosys',
    'Flask', 'Flutter', 'Microservices', 'REST APIs'
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-container">
        <div className={`skills-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">TECHNICAL EXPERTISE</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`skill-category-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-category-title">{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`tools-section ${isVisible ? 'visible' : ''}`}>
          <h3 className="tools-title">Additional Tools & Frameworks</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <span key={index} className="tool-badge">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;