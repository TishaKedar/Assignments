import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectData = [
  { title: 'Portfolio Website', description: 'A personal portfolio website.', isLive: true },
  { title: 'Blog App', description: 'A full-stack blog application.', isLive: false },
  { title: 'E-commerce Site', description: 'An online shopping platform.', isLive: true },
  { title: 'Weather App', description: 'Shows live weather info.', isLive: false },
  { title: 'To-Do App', description: 'Manage your tasks easily.', isLive: true },
];

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome to My Portfolio</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            isLive={project.isLive}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
