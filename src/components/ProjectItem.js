import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techList = technologies.map((technology, index) => (
       <span key={index}> {technology} </span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
         {techList}
      </div>
    </div>
  );
}

export default ProjectItem;