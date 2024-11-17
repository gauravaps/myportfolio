import React from 'react';
import './project.css';

const Project = () => {
  const projects = [
    {
      id: 1,
      name: 'Real Facebook Clone',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!',
      image:
        'https://res.cloudinary.com/gauravkacloud/image/upload/v1731759049/IMG20230327165354_zn8yks.jpg',
      liveUrl: 'https://your-live-project-url.com',
      sourceCode: 'https://github.com/your-repo/facebook-clone',
    },

    {
      id: 2,
      name: 'Real Facebook Clone',
      description:'hrhrhrhrrrrrrrrrrrrrrrrrrrrrrrkcdckjldacskooooooooooooooooooeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeuddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddnnnnnnnnnnnnnnnnnn lllllllllllllllllllllldddddddddddddddddd ppppppppppppppppppppp',
      image:
        'https://res.cloudinary.com/gauravkacloud/image/upload/v1731759049/IMG20230327165354_zn8yks.jpg',
      liveUrl: 'https://your-live-project-url.com',
      sourceCode: 'https://github.com/your-repo/facebook-clone',
    },
    {
      id: 3,
      name: 'Real Facebook Clone',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!',
      image:
        'https://res.cloudinary.com/gauravkacloud/image/upload/v1731759049/IMG20230327165354_zn8yks.jpg',
      liveUrl: 'https://your-live-project-url.com',
      sourceCode: 'https://github.com/your-repo/facebook-clone',
    },
    {
      id: 4,
      name: 'Real Facebook Clone',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!',
      image:
        'https://res.cloudinary.com/gauravkacloud/image/upload/v1731759049/IMG20230327165354_zn8yks.jpg',
      liveUrl: 'https://your-live-project-url.com',
      sourceCode: 'https://github.com/your-repo/facebook-clone',
    },
    {
      id: 5,
      name: 'Real Facebook Clone',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!',
      image:
        'https://res.cloudinary.com/gauravkacloud/image/upload/v1731759049/IMG20230327165354_zn8yks.jpg',
      liveUrl: 'https://your-live-project-url.com',
      sourceCode: 'https://github.com/your-repo/facebook-clone',
    },
    {
      id: 6,
      name: 'Real Facebook Clone',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!',
      image:
        'https://res.cloudinary.com/gauravkacloud/image/upload/v1731759049/IMG20230327165354_zn8yks.jpg',
      liveUrl: 'https://your-live-project-url.com',
      sourceCode: 'https://github.com/your-repo/facebook-clone',
    },
    {
      id: 7,
      name: 'Real Facebook Clone',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!',
      image:
        'https://res.cloudinary.com/gauravkacloud/image/upload/v1731759049/IMG20230327165354_zn8yks.jpg',
      liveUrl: 'https://your-live-project-url.com',
      sourceCode: 'https://github.com/your-repo/facebook-clone',
    },
    
  ];

  return (
    <section className="projects-section">
  <h1 className="section-title">My Projects</h1>
  <div className="projects-grid">
    {projects.map((project) => (
      <div key={project.id} className="project-card">
        <img
          src={project.image}
          alt={`${project.name} thumbnail`}
          className="project-image"
        />
        <div className="project-content">
          <h2 className="project-title">{project.name}</h2>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Open Project
            </a>
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
      );
};

export default Project;
