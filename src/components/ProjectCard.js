import React from "react";
import styled from "styled-components";
import { FaGithub, FaCodepen } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function ProjectCard({ img, title, description, skills, github, live }) {
  const skillsArr = skills.split(",");
  return (
    <Wrapper>
      <img src={img} alt={title} className="project-img" />
      <div className="project-detail">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="skills">
          {skillsArr.map((skill) => {
            return (
              <div key={uuidv4()} className="btn">
                {skill}
              </div>
            );
          })}
        </div>
      </div>
      <div className="links">
        {github && (
          <a href={github}>
            <FaGithub className="icon" />
          </a>
        )}
        {live && (
          <a href={live}>
            <FaCodepen className="icon live-icon" />
          </a>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  border-radius: 3%;
  overflow: hidden;
  background: var(--clr-primary-9);
  
  .skills{
    display:flex;
    gap: 0.5rem;
    flex-wrap:wrap;
  }
  .btn{
    font-size: 0.6rem;
    font-weight: bold;
  }
  .project-detail {
    margin: 0.5rem 1rem;
  }
  .project-img {
    height: 13rem;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }
  .live-icon{
    animation: spinner 10s linear infinite;
  }
  .links {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  .icon {
    font-size: 1.5rem;
    color: var(--clr-primary-5);
  }
`;

export default ProjectCard;
