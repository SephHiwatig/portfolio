import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return <Wrapper>
    <Navbar />
    <Header />
  </Wrapper>
}

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default App;
