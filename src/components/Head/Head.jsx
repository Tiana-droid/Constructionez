import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Button from "./Button";
import Counter from "./Counter";
import { Link } from "react-router-dom";
import { Img } from "../../assets/index";

//STYLESHEET
const Header = styled.div`
  width: 100%;
  height: fit-content;
`;
const Sect = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 50%;
  gap: 3em;

  @media (max-width: 750px) {
    grid-template-columns: auto;
  }

  & .img {
    position: relative;
    top: -13em;
    z-index: -1;
    background-image: url(${Img});
    border-radius: 2px 2px 2px 255px;
    height: 90vh;
    color: white;
    background-position: center;
    background-size: cover;
    width: 100%;

    @media (max-width: 750px) {
      position: static;
    }

    @media (min-height: 950px) {
      height: 70vh;
    }
  }

  & .back {
    width: 70px;
    height: 45vh;
    background-color: rgba(129, 188, 229, 0.4);
    position: absolute;
    z-index: -6;
    right: 1.7%;
    border-radius: 0px 70px 70px 0px;
    margin-top: -3em;

    @media (max-width: 750px) {
      background-color: rgba(4, 171, 177, 0.1);
      height: 60vh;
      margin-top: 3em;
    }
  }

  & .cta {
    /* margin-top: 2em; */

    & b {
      color: #18a7b6;
    }
    & h1 {
      color: #313131;
      font-size: 40px;
    }
    & p {
      line-height: 30px;
      text-align: justify;
      color: #a4a4a4;
      font-weight: 400;
    }

    & .btn {
      width: 75%;
      gap: 10px;
      height: fit-content;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      // margin: auto;
      padding-left: 16px;
      margin-top: 50px;

      #Butn {
        width: 100%;
        height: 30px;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border: 1px solid #18a7b6;
        border-radius: 20px 0 20px 0;
        background-color: white;
        cursor: pointer;
        color: #18a7b6;

        &:hover {
          border: 1px solid black;
          color: black;
        }
      }
    }
  }
`;
const Buzz = styled.div`
  width: 100%;
  gap: 3em;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(242, 242, 242, 0.2);
  color: #18a7b6;
  margin-top: 4%;
  border-radius: 50px;
  font-size: 19px;

  @media (min-width: 1000px) {
    width: 80%;
    margin: auto;
    margin-top: 5%;
  }
  @media (min-width: 1240px) {
    width: 70%;
    margin: auto;
  }
`;
//END OF STYLESHEET

const Head = () => {
  return (
    <>
      <Header>
        <Navbar />
        <Sect>
          <div className="cta">
            <h1>
              <b>Masters</b> of Consistency and <b>Quality</b>.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              provident eius eveniet magnam in cum at! Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Repudiandae, nisi?
            </p>
            <div className="btn">
              <Button />

              <Link to="/contact" id="Butn">
                {" "}
                Contact Us
              </Link>
              <div className="back"></div>
            </div>
            <Counter />
          </div>
          <div className="img"></div>
        </Sect>
        <Buzz>
          <h4>CHASE</h4>
          <h4>asana</h4>
          <h4>BuzzFeed</h4>
          <h4>toggl</h4>
          <h4>Walmart</h4>
        </Buzz>
      </Header>
    </>
  );
};

export default Head;
