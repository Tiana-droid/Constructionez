import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;

  a {
    margin-right: 20px;
    text-decoration: none;
    color: #18a7b6;

    &:hover {
      color: black;
    }
  }
`;
export const Content = styled.div`
  width: 40%;

  span {
    color: #484848;
    font-weight: 400;
    text-align: justify;
    font-size: 16px;
  }

  button {
    background-color: #18a7b6;
    width: 135px;
    height: 35px;
    padding: 4px;
    margin-top: 5em;
    border: none;
    outline: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: black;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const MainImage = styled.div`
  width: 50%;

  @media (max-width: 700px) {
    width: 100%;
  }

  & img {
    width: 100%;
    height: 417px;

    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;
export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0%;
  z-index: 30;
  overflow-y: scroll;
  left: 0;
  display: flex;
  align-items: center;
`;
export const Popup = styled.div`
  width: 100% !important;
  height: 100vh;
  margin-top: 13em;

  & .control-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    top: 30px !important;
  }

  & .thumbs {
    display: flex;
    width: 30% !important;
    margin: auto;
    padding-inline-start: 0;
    justify-content: space-between;

    @media (max-width: 500px) {
      width: 62% !important;
    }
    @media (min-width: 501px) and (max-width: 1050px) {
      width: 40% !important;
    }

    img {
      height: 50px;
      margin-top: 0;
    }
  }
`;
export const PopupImg = styled.div`
  background-color: white;
  width: 70%;
  margin: auto;
  border-radius: 15px;
  height: fit-content !important;
  padding: 20px;

  @media (max-width: 360px) {
    padding: 10px !important;
    width: 94%;
  }
  @media (max-width: 700px) {
    padding: 14px;
    width: 90%;
  }

  & .close {
    float: right;
    font-size: 18px;
  }

  img {
    margin-top: 30px;
    width: inherit;
    height: 500px;
  }
`;
