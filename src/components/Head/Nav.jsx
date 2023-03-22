import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";

const Navs = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
  color: black;

  @media (max-width: 950px) {
      align-items: flex-end;
      justify-content: center;
    }

  & .menu {
    display: none;

    @media (max-width: 950px) {
      display: block;
      font-weight: 500;
      font-size: 34px;
      color: black;
      height: 70px;
    margin-top: 7px;
    }
  }

  & ul {
    width: 94%;
    height: 70px;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;
    padding-inline-start: 0px;
    font-weight: 500;

    @media (max-width: 950px) {
      display: none;
    }

    & li {
      & a {
        color: black;
        text-decoration: none;
        
        &:hover {
          padding-bottom: 4px;
          border-bottom: 2px solid #18a7b6;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <>
      <Navs>
        <BiMenuAltRight className="menu" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </Navs>
    </>
  );
};

export default Nav;
