import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import { useGlobalContext } from '../contexts';

const Header = () => {
  const {openSidebar} = useGlobalContext();
  return (
    <Wrapper>
      <div className="nav-container">
        <nav className='section-center navbar'>
          <h3 className='page-title'>&lt;/Roshan&gt;</h3>
          <ul className='nav-links'>
            <li><a href="/" className='nav-link'>Home</a></li>
            <li><a href="/" className='nav-link'>About</a></li>
            <li><a href='/' className='nav-link'>Projects</a></li>
            <li><a href="/" className='nav-link'>Contact</a></li>
          </ul>
          <FaBars className='nav-icon' onClick={openSidebar}/>
        </nav>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page-title{
  color: var(--clr-primary-5);
  text-shadow: var(--dark-shadow);
}
.nav-icon{
  font-size: 2rem;
  color: var(--clr-primary-5);
}
.nav-links{
  display:none;
}

.nav-container{
  background: var(--clr-primary-9);
  padding: 1rem;
}
@media screen and (min-width: 768px){
  .nav-links{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    column-gap: 2rem;
  }
  .nav-link{
    color: var(--clr-text-1);
    font-weight: 500;
    transition: var(--transition);
  }
  .nav-icon{
    display: none;
  }
  .nav-link:hover{
    color: var(--clr-primary-3);
  }
}
`


export default Header
