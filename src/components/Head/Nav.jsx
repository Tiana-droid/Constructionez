import React, { useState } from "react";
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

  & .menu,
  .close {
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

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 100%;
  z-index: 100;

  @media (min-width: 950px) {
    display: none;
  }
`;
const SideNav = styled(Navs)`
  width: 60%;
  height: 80vh;
  float: right;
  flex-direction: row;
  align-items: flex-start;
  border-right: 6px solid #18a7b6;
  justify-content: flex-end;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0px 2px 4px #d1d1d1;

  .close {
    height: 30px;
    margin-top: 30px;
  }

  ul {
    width: 98%;
    flex-direction: column;
    /* margin-top: -14em; */
    height: 30vh;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 950px) {
      display: flex;
    }

    @media (min-width: 950px) {
      display: none;
    }

    li {
      width: 100%;
      padding-bottom: 4px !important;
      border-bottom: 2px solid #e8e8e8;
      
      a {
        padding: 0px 10px;
        color: #000 !important;
      }
    }
  }
`;

const Nav = () => {
  const [sideBar, setSideBar] = useState(false);

  const OnClick = () => {
    setSideBar(!sideBar);
  };
  return (
    <>
      <Navs>
        <BiMenuAltRight className="menu" onClick={OnClick} />
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

      {sideBar && (
        <Wrapper onClick={OnClick}>
          <SideNav>
            {/* <FaTimes className="close" onClick={OnClick} /> */}
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
          </SideNav>
        </Wrapper>
      )}
    </>
  );
};

export default Nav;
