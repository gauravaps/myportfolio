import React from 'react';
import Languages from '../../Languages';
import './style.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-heading">Languages and Library</h1>
      <div className="skills-grid">
        {Languages.map((img) => (
          <a key={img._id} href={img.url} className="skill-item" target="_blank" rel="noopener noreferrer">
            <img className="skill-image" src={img.photoscr} alt={img.title} />
            <p className="skill-title">{img.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
