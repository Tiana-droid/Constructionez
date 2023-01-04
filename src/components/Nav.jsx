import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Img } from "../assets/index.js";
import {BiMenuAltRight} from 'react-icons/bi'

const Navs = styled.nav`
background-image: url(${Img});
border-radius: 2px 2px 2px 255px;
height: 70vh;
width: 100%;
color: white;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
gap: 1em;
margin-top: 10px;

& .menu {
  display: none;

  @media (max-width: 685px) {
    display: block;
    font-weight: 500;
    font-size: 27px;
    position: absolute;
    top: 1%;
    color: black;
    right: 6%;
  }
}


& ul {
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  padding-inline-start: 0px;
  font-weight: 700;

  @media (max-width: 685px) {
    display: none;
    font-weight: 500;
  }
  @media (max-width: 830px) {
    width: 96%;
    margin: 15px auto 0px auto;
  }
}
`

const Nav = () => {
  return (
    <>
      <Navs>
        <BiMenuAltRight className="menu" />
        <ul>
          <li>
            <Link to="Home">Home</Link>
          </li>
          <li>About us</li>
          <li>Services</li>
          <li>Project</li>
        </ul>
      </Navs>
    </>
  );
};

export default Nav;
