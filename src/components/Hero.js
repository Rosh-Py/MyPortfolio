import React from "react";
import styled from "styled-components";

const name = "Roshan Jha";
const profession = "Full Stack Web Developer";
const heroImg =
  "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

function Hero() {
  return (
    <Wrapper>
      <div className="section section-center hero-container">
        <div className="hero-title">
          <div className="underline"></div>
          <h1 className="heading">I'm {name}</h1>
          <h5 className="profession heading">{profession}</h5>
          <button className="btn">Hire me</button>
        </div>
        <div className="hero-img-container">
          <img src={heroImg} alt="hero" className="hero-img" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--clr-primary-9);
  .profession {
    color: var(--clr-text-5);
  }
  .hero-img-container {
    display: none;
  }
  .hero-container {
    display: grid;
    place-items: center;
    padding-top: 2rem;
    height: calc(100vh - 74px);
  }
  .hero-title {
    display: grid;
    place-items: center;
  }
  @media screen and (min-width: 768px) {
    .hero-container {
      display: grid;
      place-items: center;
      grid-template-columns: 1fr 1fr;
    }
    .hero-title {
      justify-items: flex-start;
    }
    .hero-img-container {
      display: block;
    }
    .hero-img {
      max-width: 20rem;
      max-height: 25rem;
      object-fit: cover;
      position: relative;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    /* .hero-img-container {
      justify-self: flex-start;
    } */
    .underline {
      margin-left: 0;
    }
    .hero-img-container {
      position: relative;
    }
    .hero-img-container::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      border: 0.25rem solid var(--clr-primary-5);
      top: 2rem;
      right: -2rem;
      border-radius: var(--radius);
    }
    /* .hero-img:hover {
      transform: translate(2rem, 2rem);
    } */
  }
`;
export default Hero;