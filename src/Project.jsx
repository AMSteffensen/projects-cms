import React from "react";
import useFetchProjects from "./fetchProjects";
import styled from "styled-components";

const ProjectsWrapper = styled.div`
  margin: 2rem 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem; /* Adds space below the title */
  text-align: center;
  color: #333;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const ProjectItem = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  width: 300px;
  text-align: center;
  @media (max-width: 600px) {
    width: 100%; /* Take full width on small screens */
  }
`;

const ProjectTitle = styled.li`
  list-style-type: none;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProjectsComponent = () => {
  const { data: projects, isLoading, isError, error } = useFetchProjects();

  if (isLoading) return <h4>Loading...</h4>;
  if (isError)
    return <h4>There was an error fetching the projects: {error.message}</h4>;

  return (
    <ProjectsWrapper>
      <Title>Projects</Title>
      <ProjectList>
        {projects.map((project) => {
          const { id, url, title, img } = project;
          return (
            <a key={id} href={url} target="_blank" rel="noopener noreferrer">
              <ProjectItem role="link">
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectImage src={img} alt={title} />
              </ProjectItem>
            </a>
          );
        })}
      </ProjectList>
    </ProjectsWrapper>
  );
};

export default ProjectsComponent;
