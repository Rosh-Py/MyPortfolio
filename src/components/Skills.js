import React from "react";
import { SkillCategory } from "./";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const skills = [
  { category: "Frontend", skills: "HTML5, CSS3, React.js" },
  {
    category: "Backend",
    skills: "Node.js, MongoDB, Mongoose, Express, Oracle SQL",
  },
  { category: "Languages", skills: "Javascript, Python, PL/SQL" },
];

function Skills() {
  return (
    <Wrapper>
      <div className="section section-center">
        <h2 className="text-center">Skills</h2>
        <div className="underline"></div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <SkillCategory key={uuidv4()} {...skill} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--clr-primary-9);
  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem 2rem;
  }
`;
export default Skills;
