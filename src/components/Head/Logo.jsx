import React from 'react'
import Button from "./Button";
import Counter from "./Counter";
import styled from "styled-components";

const LogoHead = styled.div`
& h3 {
    font-size: 15px;
    color: rgba(4, 171, 177, 1);
    margin-bottom: 10%;
  }
  & b {
    color: rgba(4, 171, 177, 1);
  }
  & h1 {
    font-size: 40px;
  }
  & p {
    line-height: 30px;
    text-align: justify;
  }
`
const Butn = styled.button`
  width: 100%;
  height: 30px;
  padding: 4px;
  color: rgba(4, 171, 177, 1);
  border: 1px solid rgba(4, 171, 177, 1);
  border-radius: 20px 0 20px 0;
  background-color: white;

  &:hover {
    border: 1px solid black;
    color: black;
  }
`;

const Logo = () => {
  return (
    <>
    <LogoHead>
            <h3>CONSTRUCTIONEZ</h3>
            <div className="back"></div>
            <div className="cta">
              <h1>
                <b>Masters</b> of Consistency and <b>Quality</b>.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                provident eius eveniet magnam in cum at! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, nisi?
              </p>
              <div className="btn">
                <Button />
                <Butn>Contact Us</Butn>
              </div>
              <Counter/>
            </div>
          </LogoHead>
    </>
  )
}

export default Logo