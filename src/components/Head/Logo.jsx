import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoHead = styled.div`
width: 100%;
height: 70px;
display: flex;
    align-items: center;
    
  & h3 {
    font-size: 15px;
    color: #18a7b6;
    margin-bottom: 10%;
    letter-spacing: 1.5px;
  }

  & a {
    text-decoration: none;
  }
`;

const Logo = () => {
  return (
    <>
      <LogoHead>
        <Link to="/">
          <h3>CONSTRUCTIONEZ</h3>
        </Link>
      </LogoHead>
    </>
  );
};

export default Logo;
