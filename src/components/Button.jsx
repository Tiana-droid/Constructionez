import React from "react";
import styled from "styled-components";

//STYLESHEET
const Btn = styled.button`
  width: 100%;
  height: 30px;
  padding: 4px;
  background-color: rgba(4, 171, 177, 1);
  border: none;
  color: white;
  border-radius: 20px 0 20px 0;
  box-shadow: 0px 4px 14px 3px rgba(4, 171, 177, 0.3);
`;
//END OF STYLESHEET

const Button = () => {

  return (
    <>
    <Btn>Explore</Btn>
    </>
  );
};

export default Button;
