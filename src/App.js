import styled from 'styled-components';
import './App.css';
import Home from './views/Home';
import {Routes, Route } from "react-router-dom";

const Container = styled.div`
  width: 97%;
  margin: auto;
  overflow-x: hidden;
  height: fit-content;
  box-sizing: border-box;
`

function App() {
  return (
    <>
    <Container>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Container>
    </>
  );
}

export default App;
