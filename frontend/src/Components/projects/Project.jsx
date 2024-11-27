import React, { useEffect, useState } from 'react';
import { HashLoader } from "react-spinners";
import './project.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Project = () => {

  const [loading ,setloading] =useState(true)
  const token = localStorage.getItem("token");

  const [projects, setProjects] = useState([]);


  
  useEffect(() => {

    const fetchProjects = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_PORT}/getprojects`);      
          setProjects(response.data.projects);


        } catch (error) {
            console.error("Error fetching projects:", error);

        } finally {
            setloading(false);
        }
    };

    fetchProjects();
}, []);




  return (
    

    <section className="projects-section">

    {loading ? (
      <div className="sekelton_loader">
        <HashLoader color="#1876f2" size={30} />
      </div>
    ) : ( 

    <> 
    {token ? (  <Link to={'/addproject'} className="section-title add-project">Add projects.</Link> ) 
    : (<h1 className="section-title">Your latest projects..</h1>)}  
  

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
  </>

   )}

</section>
      );
};

export default Project;
