import React, { useState, useEffect } from 'react';
import './projects.css';
import { projectsData } from '../../Data';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('websites');

  const showCategory = category => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setSelectedCategory('all');
  }, []);

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
            <div className={`project ${project.category}`} key={project.id}>
              <img src={require(`../../assets/${project.image}`)} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          )
        ))}
      </section>
    </div>
  );
};

export default Projects;
