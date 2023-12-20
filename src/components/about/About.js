import React, { useState } from 'react';
import { professionalExperience, education, certificationsAndLicenses, seminars } from '../../Data';
import './about.css';

const About = () => {
  const [selectedTab, setSelectedTab] = useState('professionalExperience');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'professionalExperience':
        return (
          <div>
            <h2 className="section-title">Professional Experience</h2>
            <div className="experience-container">
              {professionalExperience.map((experience, index) => (
                <div key={index} className="experience">
                  <h3 className="position">{experience.position}</h3>
                  <p className="company-dates">{experience.company} - {experience.dates}</p>
                  <ul className="responsibilities">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="responsibility">{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'education':
        return (
          <div>
            <h2 className="section-title">Education</h2>
            <div className="education">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3>{edu.degree}</h3>
                  <p>{edu.institute} - {edu.dates}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'certificationsAndLicenses':
        return (
          <div>
            <h2 className="section-title">Certifications & Licenses</h2>
            <div className="certifications">
              <ul>
                {certificationsAndLicenses.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'seminars':
        return (
          <div>
            <h2 className="section-title">Seminars</h2>
            <div className="seminars">
              <ul>
                {seminars.map((seminar, index) => (
                  <li key={index}>{seminar}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="about">

    <div className="tabs-container" id="about">
    
        <div className="tabs">
            <button className={selectedTab === 'professionalExperience' ? 'active' : ''} onClick={() => handleTabClick('professionalExperience')}>Professional Experience</button>
            <button className={selectedTab === 'education' ? 'active' : ''} onClick={() => handleTabClick('education')}>Education</button>
            <button className={selectedTab === 'certificationsAndLicenses' ? 'active' : ''} onClick={() => handleTabClick('certificationsAndLicenses')}>Certifications & Licenses</button>
            <button className={selectedTab === 'seminars' ? 'active' : ''} onClick={() => handleTabClick('seminars')}>Seminars</button>
        </div>

      </div>

      <div className="tab-content">
        {renderContent()}
      </div>
      
    </div>
  );
};

export default About;
