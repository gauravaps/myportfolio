import React, { useState } from "react";
import './addproject.css';
import axios from "axios";
import { toast } from 'react-toastify';
import { ClipLoader } from "react-spinners";

const AddProject = () => {
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [sourceCode, setSourceCode] = useState('');
  const [loading ,setloading] = useState(false)
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !description || !image || !liveUrl || !sourceCode) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('image', image);
      formData.append('liveUrl', liveUrl);
      formData.append('sourceCode', sourceCode);
      setloading(true)
      
      const { data } = await axios.post(`${import.meta.env.VITE_PORT}/addproject`, formData);

      if (data) {
        // Reset form fields
        setImage('');
        setName('');
        setDescription('');
        setLiveUrl('');
        setSourceCode('');
        setloading(false)

        // Show success toast
        toast.success(data.message || "Project added successfully!");
      }
    } catch (error) {
      console.error('Error while adding project:', error);

      // Show error toast
      toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="add-project-container">
      <h1 className="add-project-title">Add your new project</h1>
      <form className="add-project-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="projectTitle" className="form-label">Project Title</label>
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              id="projectTitle"
              className="form-input"
              placeholder="Enter project title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectDescription" className="form-label">Project Description</label>
            <textarea
              id="projectDescription"
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              className="form-input form-textarea"
              placeholder="Enter project description"
            ></textarea>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="projectImage" className="form-label">Project Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              id="projectImage"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectURL" className="form-label">Project URL</label>
            <input
              type="text"
              name="liveUrl"
              id="projectURL"
              value={liveUrl}
              onChange={(e) => setLiveUrl(e.target.value)}
              className="form-input"
              placeholder="Enter project URL"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="sourceCode" className="form-label">Source Code</label>
            <input
              type="text"
              value={sourceCode}
              onChange={(e) => setSourceCode(e.target.value)}
              id="sourceCode"
              name="sourceCode"
              className="form-input"
              placeholder="Enter source code URL"
            />
          </div>
          <div className="form-group button-group">
            {loading ? (  <ClipLoader size={20} color="#1876f2" loading={loading} />):(
              <button type="submit" className="submit-button">Add Project</button>
            )}
          
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
