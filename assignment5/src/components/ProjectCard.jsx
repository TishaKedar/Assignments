import React from 'react';

const ProjectCard = ({ title, description, isLive }) => {
  const badgeStyle = {
    padding: '5px 10px',
    borderRadius: '8px',
    backgroundColor: isLive ? 'green' : 'red',
    color: 'white',
    fontSize: '12px',
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      borderRadius: '8px',
      width: '250px',
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span style={badgeStyle}>
        {isLive ? 'Live' : 'Under Development'}
      </span>
    </div>
  );
};

export default ProjectCard;
