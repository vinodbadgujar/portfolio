import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import '../styles/Certifications.css';

const Certifications = () => {
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

  const certifications = [
    {
      title: 'Professional Cloud Architect',
      provider: 'Google Cloud',
      date: 'June 2024',
      level: 'Professional',
      color: '#4285F4'
    },
    {
      title: 'Professional Cloud DevOps Engineer',
      provider: 'Google Cloud',
      date: 'December 2023',
      level: 'Professional',
      color: '#4285F4'
    },
    {
      title: 'Associate Cloud Engineer',
      provider: 'Google Cloud',
      date: 'March 2023',
      level: 'Associate',
      color: '#4285F4'
    },
    {
      title: 'Azure Fundamentals (AZ-900)',
      provider: 'Microsoft',
      date: 'March 2021',
      level: 'Fundamentals',
      color: '#0078D4'
    },
    {
      title: 'Programming in Java',
      provider: 'NPTEL',
      date: 'November 2019',
      level: 'Top 1% - Gold + Elite',
      color: '#34A853'
    }
  ];

  const awards = [
    {
      title: 'Accenture Celebrates Excellence (ACE)',
      subtitle: 'Growth Catalyst Award',
      period: 'FY24 - Q3'
    },
    {
      title: 'P&P Pinnacle Awards',
      subtitle: 'Excellence Recognition',
      period: 'FY24 - Q2 & Q4'
    }
  ];

  return (
    <section id="certifications" className="certifications-section" ref={sectionRef}>
      <div className="certifications-container">
        <div className={`certifications-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">CREDENTIALS</span>
          <h2 className="section-title">Certifications & Awards</h2>
        </div>

        <div className="certifications-content">
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`certification-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="cert-badge" style={{ backgroundColor: cert.color }}>
                  <Award size={24} />
                </div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-provider">{cert.provider}</p>
                  <div className="cert-meta">
                    <span className="cert-level">{cert.level}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`awards-section ${isVisible ? 'visible' : ''}`}>
            <h3 className="awards-title">Awards & Recognition</h3>
            <div className="awards-grid">
              {awards.map((award, index) => (
                <div key={index} className="award-card">
                  <div className="award-icon">
                    <Award size={28} />
                  </div>
                  <div>
                    <h4 className="award-title">{award.title}</h4>
                    <p className="award-subtitle">{award.subtitle}</p>
                    <p className="award-period">{award.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;