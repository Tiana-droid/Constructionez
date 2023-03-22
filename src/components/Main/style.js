import styled from "styled-components";
import { Img2, Img3, Img4, Img5 } from "../../assets";

//SECTION ONE STYLES STARTS HERE

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 3em;
`;
export const Top = styled.div`
  width: 98%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(279px, 1fr));
  gap: 3em;

  & .btn {
    width: 37%;
    margin-top: 30px;
  }
  & .text {
    color: #a4a4a4;
    font-weight: 400;
  }

  & .header {
    font-size: 40px;
    color: #313131;

    @media (max-width: 800px) {
      font-size: 30px;
    }
  }
`;
export const Bottom = styled(Top)`
  margin-top: 4em;

  & .img {
    background-image: url(${Img2});
    border-radius: 2px 255px 2px 2px;
    height: 85vh;
    color: white;
    background-position: center;
    background-size: cover;
    width: 100%;
  }
`;

export const List = styled.div`
  margin-top: 3em;
  width: 90%;

  @media (max-width: 655px) {
    margin-top: 1em;
  }

  & ul {
    list-style-type: none;

    & li {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 2em;

      @media (max-width: 350px) {
        align-items: flex-start;
        flex-direction: column;
        gap: 0;
      }

      & h1 {
        font-size: 40px;
        color: #313131;
      }

      p {
        font-size: 15px;
        color: #a4a4a4;
        font-weight: 600;
      }
    }
  }
`;

//SECTION ONE STYLES ENDS HERE

//SECTION TWO STYLES STARTS HERE

export const Container = styled.div`
  width: 100%;
  margin-top: 5em;
`;
export const Text = styled.div`
  width: 50%;
  text-align: center;
  margin: auto;

  @media (max-width: 850px) {
    width: 75%;
  }

  & h3 {
    font-size: 30px;
    color: #313131;
  }

  & p {
    font-size: 15px;
    color: #a4a4a4;
    font-weight: 400;
  }
`;
export const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(279px, 1fr));
  gap: 1em;
  margin-top: 4em;
`;
export const ToolTip = styled.div`
  position: relative;

  & span {
    position: absolute;
    display: none;
    text-align: center;
    font-size: 13px;
  }

  &:hover span {
    display: block;
    color: black;
  }
`;

export const GridContainer = styled.div`
  width: 90%;
  margin: auto;
  background-color: #ffffff;
  box-shadow: 2px 2px 8px 8px #f6fafb;

  & .top-marker,
  & .main,
  & .footer {
    width: 90%;
    margin: 15px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & .main,
  & .footer {
    flex-direction: column;
    align-items: center;

    & .pic1,
    & .pic2,
    & .pic3 {
      background-image: url(${Img3});
      height: 280px;
      width: 100%;
      margin-top: 20px;
      background-position: center;
      background-size: cover;
    }
    & .pic2 {
      background-image: url(${Img4});
    }
    & .pic3 {
      background-image: url(${Img5});
    }

    & .profile {
      text-align: center;

      & h3 {
        font-size: 26px;
        margin-block-end: 0;
        color: #313131;
      }

      span {
        font-size: 14px;
        font-weight: 400;
        color: #a4a4a4;
      }
    }
  }

  & .footer {
    width: 90%;
    text-align: center;
    margin: auto;
    gap: 2em;
    margin-top: 2em;
    padding-bottom: 20px;

    & a {
      font-size: 18px;
      color: #18a7b6;
      opacity: 0.7;
      font-weight: 500;

      &:hover {
        color: #000;
      }
    }

    & button {
      border: 2px solid #18a7b6;
      outline: none;
      border-radius: 10px;
      background-color: white;
      width: 100%;
      height: 30px;
      display: flex;
      padding: 19px;
      cursor: pointer;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: #18a7b6;
        color: white;
      }

      a {
        font-size: 14px;
        font-weight: 300;
        text-decoration: none;
        color: black;
      }
    }
  }
`;
export const Arr = styled.div`
  width: 70%;
  margin: 3em auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & .active {
    margin-left: 10px;
    background-color: #18a7b6;
    padding: 6px;
    border-radius: 50%;
    color: #ffffff;
  }
`;

//END OF SECTION TWO STYLES

//TESTIMONIES STYLE STARTS HERE

export const TestWrapper = styled.div`
  padding: 20px;
  margin-top: 7em;

  & .slider {
    width: 78% !important;

    @media (max-width: 600px) {
      width: 100% !important;
    }
  }
`;
export const OuterDiv = styled(GridContainer)`
  padding: 20px;

  @media (max-width: 600px) {
    width: 100%;
  }

  & .profile-pic {
    width: 30%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
  #star {
    margin-top: 3em;
    width: 30% !important;
    height: 10vh;

    @media (max-width: 900px) {
      width: 50% !important;
    }
    @media (max-width: 600px) {
      width: 80% !important;
    }
  }
`;

export const TestContent = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 4em;

  @media (max-width: 500px) {
    width: 90%;
  }

  p {
    font-weight: 500;
    font-size: 17px;
  }
`;
