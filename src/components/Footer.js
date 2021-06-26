import React from "react";
import styled from "styled-components";
import { userGithub, userTwitter, userLinkedIn } from "../data";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <Wrapper>
      <div className="footer-title heading text-center">
        <h5>&copy; All rights reserved, {new Date().getFullYear()}</h5>
      </div>
      <div className="footer-icons">
        {userGithub && (
          <a href={userGithub} className="footer-icon">
            <FaGithub />
          </a>
        )}
        {userLinkedIn && (
          <a href={userLinkedIn} className="footer-icon">
            <FaLinkedinIn />
          </a>
        )}
        {userTwitter && (
          <a href={userTwitter} className="footer-icon">
            <FaTwitter />
          </a>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  border-top: 1px solid var(--clr-text-1);
  padding: 1rem 0;
  background: grey;
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
    color: white;
    transition: var(--transition);
  }
  .footer-icon:hover {
    color: var(--clr-primary-5);
  }
`;

export default Footer;
