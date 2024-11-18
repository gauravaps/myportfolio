import React from "react";

const AddProject = () => {
  return (
    <div>
      <h1>Add your new project.</h1>
      <form>
        <input type="text" placeholder="Project Title" />
        <input type="text" placeholder="Project Description" />
        <input type="file" placeholder="Project Image" />
        <input type="text" placeholder="Project URL" />
        <input type="text" placeholder="Source Code" />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProject;
