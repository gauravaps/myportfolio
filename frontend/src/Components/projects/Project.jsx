import React, { useEffect, useState } from 'react';
import { HashLoader } from "react-spinners";
import './project.css';
import { Link } from 'react-router-dom';
import EditModal from './EditModel';
import axios from 'axios';
import Dots from './Dot';
import { toast } from 'react-toastify';

const Project = () => {

  const [loading ,setloading] =useState(true)
  const token = localStorage.getItem("token");
  const [selectedProject, setSelectedProject] = useState(null); 
  const [showModal, setShowModal] = useState(false);
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


 // Functionality for edit and delete
 const handleEdit = (project) => {
  setSelectedProject(project)
  setShowModal(true)
};



const handleEditSubmit = async (formData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(
      `${import.meta.env.VITE_PORT}/editproject`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    toast.success(response.data.message || 'Project updated successfully');

     // Update the projects list with the edited project
     const updatedProjects = projects.map((proj) =>
      proj._id === response.data.project._id ? response.data.project : proj
    );
    setProjects(updatedProjects);
  } catch (error) {
    console.error('Error updating project:', error);
    toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
  } finally {
    setShowModal(false);
  }
};




const handleDelete = async(id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this project?");
  if (!confirmDelete) return;

try {

  const response = await axios.delete(`${import.meta.env.VITE_PORT}/delete/${id}`,
      {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      })

      if (response.status === 200){
        toast.success(response.data.message || 'Project deleted successfully');
      setProjects((previous) =>previous.filter((project) => project._id !==id))
      }
  
} catch (error) {
  console.error("Error deleting project:", error);
    alert("Failed to delete project. Please try again.");
}

};




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
       <div key={project._id} className="project-card">
        
          {token && ( 
                <div className="dots-container">
                  <Dots color="#828387" />
                  <div className="dots-actions">
                    <button onClick={() => handleEdit(project)}>Edit</button>
                    <button onClick={() => handleDelete(project._id)}>Delete</button>
                  </div>
                </div> )}
        
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

{showModal &&  (
  <EditModal
  project={selectedProject}
  modalClose={() => setShowModal(false)} 
  handleEditSubmit={handleEditSubmit}
  />
)}

  </div>


  </>





   )}

</section>
      );
};

export default Project;
