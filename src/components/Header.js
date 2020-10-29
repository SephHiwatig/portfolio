import React from 'react';
import styled, { keyframes } from 'styled-components';

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
            <img src="https://d2krks2etiea2r.cloudfront.net/wp-content/uploads/2018/03/26095802/user-placeholder.jpg" alt="photo" />
        </ImgWrapper>
    </Wrapper>
};

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    padding: 16px;
    background-color: #525e65;
    color: #ddd;

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
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: 0 16px;
    max-width: 300px;
`;

const ImgWrapper = styled.div`
    padding: 0 16px;
`;

export default Header;