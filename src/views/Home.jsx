import React from "react";
import { Footer, Head, SectionOne, Testimonies } from "../components";
import Services from "./Services";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: auto;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Head />
        <SectionOne/>
        <div id="services"><Services/></div>
        <Testimonies/>
        <Footer/>
      </Container>
    </>
  );
};

export default Home;
