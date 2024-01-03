import React, { useState } from 'react';
import './projects.css';
import { projectsData } from '../../Data';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('websites');
  const [hoveredProject, setHoveredProject] = useState(null); // State to track hovered project

  const showCategory = category => {
    setSelectedCategory(category);
  };

  const handleMouseEnter = projectId => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null); // Reset the hovered project when mouse leaves
  };

  const handleProjectClick = (url) => {
    window.open(url, '_blank');
  };


  return (
    <div className="projects-container" id="projects">
      <header className="portfolio-header">
        <h1 className="portfolio-title">My Portfolio</h1>
        <nav className="portfolio-nav">
          <ul className="portfolio-nav-list">
            <li>
              <button
                className={`portfolio-nav-button ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => showCategory('all')}
              >
                All
              </button>
            </li>
            <li>
              <button
                className={`portfolio-nav-button ${selectedCategory === 'websites' ? 'active' : ''}`}
                onClick={() => showCategory('websites')}
              >
                Websites
              </button>
            </li>
            <li>
              <button
                className={`portfolio-nav-button ${selectedCategory === 'apps' ? 'active' : ''}`}
                onClick={() => showCategory('apps')}
              >
                Apps
              </button>
            </li>
          </ul>
        </nav>
      </header>

     <section className="portfolio">
        {projectsData.map(project => (
          (selectedCategory === 'all' || project.category === selectedCategory) && (
            <div
              className={`project ${project.category}`}
              key={project.id}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleProjectClick(project.url)} // Handle project click
            >
              <img src={require(`../../assets/${project.image}`)} alt={project.title} />
              {/* Conditional rendering of the title */}
              {(hoveredProject === project.id) && (
                <div className="title-wrapper">
                  <div className="title-content">
                    <p className="title__project">{project.title}</p>
                  </div>
                </div>
              )}
            </div>
          )
        ))}
      </section>
    </div>
  );
};

export default Projects;
