import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Img } from "../assets/index.js";
import {BiMenuAltRight} from 'react-icons/bi'

//STYLESHEET
const Header = styled.div`
  width: 100%;
  height: fit-content;
`;

const NavBar = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  gap: 3em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  margin: auto;

  & .logo {
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
  }

  & .btn {
    width: 65%;
    gap: 10px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // margin: auto;
    margin-top: 50px;
  }

  & nav {
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
  }
  & .back {
    width: 70px;
    height: 50vh;
    background-color: rgba(117, 162, 207, .5);
    position: absolute;
    z-index: -3;
    right: 1.4%;
    border-radius: 0px 70px 70px 0px;
    margin-top: 20%;

    @media (max-width: 685px) {
      background-color: rgba(4, 171, 177, .1);
      height: 60vh;
    }
  }
`;

const Butn = styled.button`
  width: 100%;
  height: 30px;
  padding: 4px;
  color: rgba(4, 171, 177, 1);
  border: 1px solid rgba(4, 171, 177, 1);
  border-radius: 20px 0 20px 0;
  background-color: white;
`;
const Counter = styled.div`
  width: 70%;
  display: flex;
  // margin: auto;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
  margin-top: 20%;
  flex-wrap: wrap;

  & h4 {
    margin-block-end: 8px;
    font-size: 20px;
  }

  & span {
    color: grey;
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
  background-color: rgba(242, 242, 242, .2);
  color: rgba(4, 171, 177, 1);
  margin-top: 7%;
  border-radius: 50px;
  font-size: 19px;

  @media (min-width: 1000px) {
    width: 80%;
    margin: auto;
    margin-top: 7%;
  }
  @media (min-width: 1240px) {
    width: 70%;
    margin: auto;
    margin-top: 7%;
  }
`;
//END OF STYLESHEET

const Head = () => {
  return (
    <>
      <Header>
        <NavBar>
          <div className="logo">
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
              <Counter>
                <div className="project-done">
                  <h4 style={{ color: "orange" }}>25,356</h4>
                  <span>Project Done</span>
                </div>
                <div className="building-done">
                  <h4 style={{ color: "rgba(4, 171, 177, 1)" }}>15,200</h4>
                  <span>Building Done</span>
                </div>
                <div className="total">
                  <h4 style={{ color: "green" }}>350+</h4>
                  <span>Total Employees</span>
                </div>
              </Counter>
              
            </div>
          </div>
          <nav>
            <BiMenuAltRight className="menu"/>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Project</li>
            </ul>
          </nav>
        </NavBar>
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
