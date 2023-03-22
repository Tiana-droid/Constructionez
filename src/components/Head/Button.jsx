import React from "react";
import styled from "styled-components";

//STYLESHEET
const Btn = styled.a`
  width: 100%;
  height: 30px;
  padding: 4px;
  background-color: #18a7b6;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 20px 0 20px 0;
  box-shadow: 0px 4px 14px 3px #a0dddf;
  cursor: pointer;

  &:hover {
    background-color: black;
    box-shadow: 0px 4px 14px 3px #626262;
  }
`;
//END OF STYLESHEET

const Button = () => {

  return (
    <>

    <Btn href="/projects">Explore</Btn>
    </>
  );
};

export default Button;
