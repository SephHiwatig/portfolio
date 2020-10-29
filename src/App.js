import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';

function App() {
  return <Wrapper>
    <Navbar />
    <Header />
    <About />
  </Wrapper>
}

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default App;
