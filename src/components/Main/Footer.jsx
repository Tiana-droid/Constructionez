import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../Head/Logo";
import { Link } from "react-router-dom";

const FooterWrap = styled.div`
  width: 100%;
  height: fit-content;
  background: #18a7b6;
  border-top: 10px solid #000;
  display: grid;
  margin-top: 7%;
`;
const FooterContainer = styled.footer`
  width: 90%;
  margin: 50px auto;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: flex-start;
  color: rgba(255, 252, 251, 0.9);
  gap: 3em;

  & h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: rgba(255, 252, 251, 0.9);
  }
  & span {
    font-weight: 400;
    font-size: 16px;
    margin-block-start: 2em;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: rgba(255, 252, 251, 0.9);
  }

  & .div4 {
    margin-left: 22%;

    @media (max-width: 1089px) {
      margin-left: 0;
    }
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 797px) {
    align-items: flex-start;
  }
`;
const List = styled.ul`
  list-style-type: none;
  margin-block-start: 0;
  padding-inline-start: 0;

  & li {
    font-size: 16px;
    font-weight: 400;
    margin-top: 9px;

    & a {
      text-decoration: none;
      color: rgba(255, 252, 251, 0.9);

      &:hover {
        color: black;
      }
    }
  }
`;
const SM = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 24px;
  width: 185px;
  height: 24px;
  justify-content: space-between;
  margin-top: 20px;

  a {
    color: white;

    &:hover {
      color: black;
    }
  }
`;
const SM2 = styled(SM)`
width: 50%;
align-items: center;
  margin-top: 0;

  @media (max-width: 498px) {
    display: block;
    width: 90%;
  }
`;
const Copyright = styled.div`
  width: 90%;
  margin: auto;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1em;

  & p {
    color: white !important;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    margin-block-end: 0;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterWrap>
        <FooterContainer>
          <div className="div1" style={{ width: "100%" }}>
            <div
              className="logo"
              style={{ marginTop: "20px", marginBottom: "30px" }}
            >
              <Logo />
            </div>
            <span>Build perfectly with us!</span>
          </div>

          <Div>
            <List>
              <h3>Quick Links</h3>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/projects">Project</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </List>
          </Div>
          <Div>
            <List>
              <h3>Help</h3>
              <li>
                <Link to="/">Get Quote</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>

              {/* <li>
                <Link to="/">Become a tutor</Link>
              </li> */}
            </List>
          </Div>

          <div className="div4">
            <h3 style={{ width: "92px" }}>Follow us</h3>
            <SM>
              <a href="/" className="icon">
                {" "}
                <FaFacebook />
              </a>
              <a href="/" className="icon">
                <FaInstagram />
              </a>
              <a href="/" className="icon">
                <FaYoutube />
              </a>
              <a href="/" className="icon">
                <FaTwitter />
              </a>
            </SM>
          </div>
        </FooterContainer>
        <div className="line" style={{ border: " 0.3px solid #000" }}></div>
        <Copyright>
          <SM2>
            <a href="https://rb.gy/hx98av" target="_blank" rel="noreferrer" className="icon" >
              
              Website Developed by Tiana
            </a>
          </SM2>
          <p>&copy; Copyright 2023, Constructionez</p>
        </Copyright>
      </FooterWrap>
    </>
  );
};

export default Footer;
