import React from "react";
import './addproject.css';

const AddProject = () => {
  return (
    <div className="add-project-container">
      <h1 className="add-project-title">Add your new project</h1>
      <form className="add-project-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="projectTitle" className="form-label">Project Title</label>
            <input
              type="text"
              id="projectTitle"
              className="form-input"
              placeholder="Enter project title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectDescription" className="form-label">Project Description</label>
            <textarea
              id="projectDescription"
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
              id="projectImage"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectURL" className="form-label">Project URL</label>
            <input
              type="text"
              id="projectURL"
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
              id="sourceCode"
              className="form-input"
              placeholder="Enter source code URL"
            />
          </div>
          <div className="form-group button-group">
            <button type="submit" className="submit-button">Add Project</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
