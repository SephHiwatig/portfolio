import React from 'react';
import styled, { keyframes } from 'styled-components';
import me from '../assets/me.jpg';

const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`

const blinkCaret = keyframes`
    from, to { border-color: transparent }
    50% { border-color: orange; }
`

const Header = () => {
    return <Wrapper>
        <InfoWrapper>
            <h1>Hi! I'm Joseph.</h1>
            <p>Full Stack Web Developer. I love building awesome projects and learning new things along the way.</p>
        </InfoWrapper>
        <ImgWrapper>
            <img src={me} />
        </ImgWrapper>
    </Wrapper>
};

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    padding: 16px;
    background-color: #525e65;
    color: #ddd;
    position: relative;
    flex-direction: column;
    
    & h1 {
        overflow: hidden;
        border-right: .15em solid orange;
        white-space: nowrap;
        margin: 0 auto; 
        letter-spacing: .15em;
        animation: 
            ${typing} 3s steps(40, end),
            ${blinkCaret} .75s step-end infinite;
    }

    @media(min-width: 768px) {
        flex-direction: row;
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: 0 16px;

    & h1 {
        max-width: 300px;
    }

    @media(min-width: 768px) {
        max-width: 300px;
    }
`;

const ImgWrapper = styled.div`
    display: flex;
    padding: 0 16px;
    justify-content: center;

    & img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 2px solid #ddd;
    }

    @media(min-width: 768px) {
        max-width: 300px;
    }
`;



export default Header;