import React, { useState } from 'react'; // Import useState from React
import './projects.css';
import { projectsData } from '../../Data';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('websites');

  const showCategory = category => {
    setSelectedCategory(category);
  };

  const handleProjectClick = (url) => {
    if (url !== '#' && url !== undefined) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="projects-container" id="projects">
      <header className="portfolio-header">
        <h1 className="portfolio-title">My Portfolio</h1>
        <h2 className="portfolio-subtitle">Below are some key Projects I have built in my career</h2>
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
              onClick={() => handleProjectClick(project.url)}
            >
              <img src={require(`../../assets/${project.image}`)} alt={project.title} />
              {/* Display the project title */}
              <div className="title-wrapper">
                <div className="title-content">
                  <p className="title__project">{project.title}</p>
                </div>
              </div>
            </div>
          )
        ))}
      </section>
    </div>
  );
};

export default Projects;
