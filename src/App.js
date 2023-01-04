import styled from 'styled-components';
import './App.css';
import Head from './components/Head'

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
      <Head/>
    </Container>
    </>
  );
}

export default App;
