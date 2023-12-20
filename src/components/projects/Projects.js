import React, { useState, useEffect } from 'react';
import './projects.css';
import { projectsData } from '../../Data';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('websites');
  const [showTitle, setShowTitle] = useState(false); // State to control title visibility

  const showCategory = category => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setSelectedCategory('all');
  }, []);

  const handleMouseEnter = () => {
    setShowTitle(true); // Show the title on mouse enter
  };

  const handleMouseLeave = () => {
    setShowTitle(false); // Hide the title on mouse leave
  };

  return (
    <div>
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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={require(`../../assets/${project.image}`)} alt={project.title} />
              {/* Conditional rendering of the title */}
              {showTitle && (
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
