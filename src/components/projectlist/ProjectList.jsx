import React from "react";
import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data.js";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Personal Projects</h1>
        <p className="pl-desc">
          These are my projects that I've created as I'm currently learning new
          technologies.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            link={item.link}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
