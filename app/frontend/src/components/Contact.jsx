import React, { useEffect, useRef, useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    // Create mailto body with user details
    const mailtoBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:vbadgujar1999@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(mailtoBody)}`;
    
    // Open user's default email client
    window.location.href = mailtoLink;
    
    // Show success message
    setFormStatus({ 
      type: 'success', 
      message: 'Opening your email client... Please complete and send the email.' 
    });
    
    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Clear status after 5 seconds
    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'vbadgujar1999@gmail.com',
      link: 'mailto:vbadgujar1999@gmail.com'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Pune, Maharashtra',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-subtitle">
            Let's discuss your next project or opportunity. I'm always open to new challenges.
          </p>
        </div>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
            <h3 className="contact-info-title">Contact Information</h3>
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div>
                    <p className="contact-info-label">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="contact-info-value link">
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-info-value">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className={`contact-form ${isVisible ? 'visible' : ''}`}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Opportunity"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>
            
            {formStatus.message && (
              <div className={`form-status ${formStatus.type}`}>
                {formStatus.message}
              </div>
            )}

            <button type="submit" className="submit-button">
              <Send size={18} />
              Get In Touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;