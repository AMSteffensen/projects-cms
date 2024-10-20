import React from "react";
import useFetchProjects from "./fetchProjects";

const ProjectsComponent = () => {
  const { data: projects, isLoading, isError, error } = useFetchProjects();

  if (isLoading) return <h4>Loading...</h4>;
  if (isError)
    return <h4>There was an error fetching the projects: {error.message}</h4>;

  return (
    <div>
      <h2>Projects</h2>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, url, title, img } = project; 
          return (
            <div key={id}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <li>{title}</li>
              </a>
              <img src={img} alt={title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsComponent;
