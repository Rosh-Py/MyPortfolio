import React from "react";
import styled from "styled-components";
import { ProjectCard } from "./";
import { v4 as uuidv4 } from "uuid";

const projects = [
  {
    img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "This is a project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores culpa nisi, totam quisquam ex!",
    skills: "Node.js, React.js, HTML, CSS",
    github: "temp",
    live: "temp",
  },
  {
    img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "This is a project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores culpa nisi, totam quisquam ex!",
    skills: "Node.js, React.js, HTML, CSS, styled components",
    github: "temp",
    live: "temp",
  },
  {
    img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "This is a project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores culpa nisi, totam quisquam ex!",
    skills: "Node.js, React.js, HTML, CSS, Javascript",
    github: "temp",
    live: "temp",
  },
  {
    img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "This is a project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores culpa nisi, totam quisquam ex!",
    skills: "Node.js, React.js, HTML, CSS",
    github: "temp",
    live: "temp",
  },
];
function Projects() {
  return (
    <div className="section section-center">
      <h2 className="text-center heading">Projects</h2>
      <div className="underline"></div>
      <Wrapper>
        {projects.map((project, index) => {
          return <ProjectCard key={uuidv4()} {...project} />;
        })}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`;

export default Projects;
