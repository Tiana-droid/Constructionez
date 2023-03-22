import styled from 'styled-components';
import './App.css'
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';
import IndustrialPage from './views/IndustrialPage';
import WarehousePage from './views/WarehousePage';
import ResidentPage from './views/ResidentPage';
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
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/services' element={<Services/>}/> */}
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects/resident' element={<ResidentPage/>}/>
        <Route path='/projects/industrial' element={<IndustrialPage/>}/>
        <Route path='/projects/warehouse' element={<WarehousePage/>}/>
      </Routes>
    </Container>
    </>
  );
}

export default App;
