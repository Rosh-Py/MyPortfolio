import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <Wrapper>
      <div className="footer-title heading text-center">
        <h5>&copy; All rights reserved, {new Date().getFullYear()}</h5>
      </div>
      <div className="footer-icons">
        <a href="" className="footer-icon">
          <FaGithub />
        </a>
        <a href="" className="footer-icon">
          <FaLinkedinIn />
        </a>
        <a href="" className="footer-icon">
          <FaTwitter />
        </a>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  border-top: 1px solid var(--clr-text-1);
  padding: 1rem 0;
  .footer-title {
    color: var(--clr-text-1);
  }
  .footer-icons {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  .footer-icon {
    font-size: 1.5rem;
    color: var(--clr-primary-5);
    transition: var(--transition);
  }
  .footer-icon:hover {
    color: var(--clr-primary-3);
  }
`;

export default Footer;
