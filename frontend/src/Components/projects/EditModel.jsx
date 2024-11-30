import React, { useState } from 'react';
import { ClipLoader } from "react-spinners";

import './edit.css';

const EditModal = ({ project, modalClose, handleEditSubmit ,loading}) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [liveUrl, setLiveUrl] = useState(project.liveUrl);
  const [sourceCode, setSourceCode] = useState(project.sourceCode);
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('projectId', project._id);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('liveUrl', liveUrl);
    formData.append('sourceCode', sourceCode);
    if (image) {
      formData.append('image', image);
    }

    handleEditSubmit(formData); 
  };

  return (
    <div className="edit-modal">
      <div className="modal-content">
        <h2>Edit Project</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project Name"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project Description"
        ></textarea>
        <input
          type="text"
          value={liveUrl}
          onChange={(e) => setLiveUrl(e.target.value)}
          placeholder="Live URL"
        />
        <input
          type="text"
          value={sourceCode}
          onChange={(e) => setSourceCode(e.target.value)}
          placeholder="Source Code URL"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />
        <div className="modal-actions">
          
        {loading ? (  <ClipLoader size={20} color="#1876f2" loading={loading} />):(
              <button onClick={handleSubmit}>Save Changes</button>
            )}
          
          <button onClick={modalClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
