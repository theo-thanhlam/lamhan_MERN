import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/lamhan-logo.png";

import styled from "styled-components";

const links = [
  { id: 1, title: "Home", ref: "Home" },
  { id: 2, title: "About", ref: "Home" },
  { id: 3, title: "Logo", ref: "../images/lamhan-logo.png" },
  { id: 4, title: "Gallery", ref: "Home" },
  { id: 5, title: "Hours", ref: "Home" },
];
const Header = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        {links.map((link) => {
          const { id, title, ref } = link;
          return title === "Logo" ? (
            <div className="nav-links">
              <img src={logo} alt="comfy sloth"></img>
            </div>
          ) : (
            <ul className="nav-links">
              <li>
                <Link>{title}</Link>
              </li>
            </ul>
          );
        })}
        <button type="button" className="nav-toggle">
          <h3>=</h3>
        </button>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: center;

  .nav-center {
    display: flex;
    grid-template-columns: 20% 20%;
    position: fixed;
    background-color: var(--clr-grey-1);
    justify-content: space-between;
    margin: 0 auto;
    max-width: 2000px;
    z-index: 1000;
    width: 100%;
    height: 90px;
  }
  .nav-links {
    margin: 10px 10px;
  }
  .nav-toggle{
    margin-left: auto;
    margin-right: 40px
    
  }
  .nav-links img {
    width: 65px;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      grid-template-columns: 20% 20% 20% 20% 20%;
      justify-content: center;
      align-items: center;
    }
    .nav-links {
      margin: 10px 10px;

      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-yellow-1);
        font-weight: 900;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          color: white;
        }
      }
    }
  }
  @media (max-width: 991px) {
    .nav-links li {
      display: None;
    }
  }
`;
