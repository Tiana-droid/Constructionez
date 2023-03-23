import styled from "styled-components";
import {  Background2 } from "../assets";

//About us page style starts here

export const OuterNav = styled.div`
  box-shadow: 0px 2px 8px #ededed;
  height: 100px;
  width: 98%;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0px 10px;
`;
export const Banner = styled.section`
  width: 90%;
  height: 30vh;
  margin: 30px auto 0px auto;
  background-color: #18a7b6;
  color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 800;
  padding: 8px;

  h2 {
    width: 100%;
  }

  p {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
  }
`;
export const Content = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;

  & p {
    color: #484848;
    font-weight: 400;
    text-align: justify;
    font-size: 17px;
  }
`;
export const Statement = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 3em;
`;
export const Mission = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  gap: 2em;
  height: fit-content;
  flex-flow: row wrap;
  box-shadow: 2px 2px 8px 8px #f6fafb;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }

  & p {
    width: 50%;
    color: #484848;
    font-weight: 400;
    text-align: justify;
    font-size: 17px;
    line-height: 21px;

    @media (max-width: 700px) {
      width: 100%;
    }
  }

  & .header {
    width: 40%;
    height: 40vh;
    background-color: #18a7b6;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;

    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;
export const Vision = styled(Mission)`
  margin-top: 3em;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

//Contact Us page style starts here
export const BackgoundImg = styled.div`
width: 100%;
height: 130vh;
background-image: url(${Background2});
background-position: left top;
background-size: cover;
`
export const Banner2 = styled(Banner)`
height: fit-content;
width: 100%;
background-color: transparent;
color: #000 !important;
margin: auto;

h2 {
  font-size: 35px;
}

p {
  text-align: center;
}
`
export const Form = styled(Content)`
  width: 40%;
  background-color: rgba(254, 254, 254, 0.8);
  padding: 20px;
  border-radius: 18px;
  float: right;
  transition: 4s transform ;

  @media (max-width: 700px) {
    width: 70%;
  }

  & form {
    width: 100%;
  }
`;
export const Input = styled.div`
  width: 70%;
  height: fit-content;
  padding: 9px;
  margin-bottom: 1em;
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  gap: 1em;
  justify-content: space-between;

  @media (max-width: 990px) {
    grid-template-columns: 100%;
  }

  & input,
  & textarea {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    padding-left: 9px;

    &:focus-visible {
      border: 2px solid #18a7b6 !important;
    }
  }

  & textarea {
    height: 180px;
    padding-top: 5px;
  }
`;
export const Btn = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

button {
    width: 100%;
    background-color: #18a7b6;
    height: 35px;
    border-radius: 20px;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    font-size: 18px;
}
`

//Project Page style starts here

export const TabContainer = styled.div`
width: 70%;
margin: auto;
margin-top: 3em;
display: flex;
align-items: center;
justify-content: center;
gap: 1em;

@media (max-width: 300px) {
  gap: 5px;
}
@media (max-width: 650px) {
  width: 100%;
}
`;
export const TabPanel = styled.button`
  background: transparent;
  border: 0;
  outline: none;
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #575757;
`;
