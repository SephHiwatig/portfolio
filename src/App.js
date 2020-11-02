import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return <Wrapper>
    <Navbar />
    <Header />
    <About />
    <Projects />
  </Wrapper>
}

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default App;
