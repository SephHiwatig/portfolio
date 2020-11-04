import React from 'react';
import styled from 'styled-components';
import Pill from './extras/Pill';

const About = () => {
    return <Wrapper id="about">
        <Content>
        <InfoWrapper>
            <Title>About me</Title>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; Ever since I was a kid, I have always been fond of puzzles and brain teasers.
            I often find myself getting lost in time when thinking about solving a problem and not stopping until it is solved.
            I really enjoy the process and the feeling of fulfillment after finding a solution. It was only a matter of time for me
            to come across Programming and Software Development. It was a complete love at first "Hello World!" and it just keeps getting better!
            </p>
            {/* <Button label="Read more"></Button> */}
        </InfoWrapper>
        <TechStack>
            <Title>Skills</Title>
            <TechWrapper>
                <Pill title="JavaScript"/>
                <Pill title="C#"/>
                <Pill title="React"/>
                <Pill title="Angular"/>
                <Pill title="NodeJs"/>
                <Pill title="TypeScript"/>
                <Pill title="SQL"/>
                <Pill title="MongoDb"/>
                <Pill title="Java"/>
                <Pill title="Python"/>
            </TechWrapper>
        </TechStack>
        </Content>
    </Wrapper>
};

const Wrapper = styled.div`
    margin: 16px 2%;
    color: #525e65;
    scroll-margin-top: 60px;
    height: 100vh;
    display: flex;
    align-items: center;

    @media(min-width: 768px) {
        margin: 16px 15%;
    }

    @media(min-width: 1200px) {
        margin: 16px 25%;
    }

`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 768px) {
        flex-direction: row;
    }
`;



const Title = styled.h2`
    position: relative;
    margin: 0;
`;

const InfoWrapper = styled.div`
    flex: 7;
    padding: 0 16px 0;

    @media(min-width: 768px) {
            border-right: 2px solid #525e65;
    }
`;

const TechStack = styled.div`
    padding: 0 16px 0;
    flex: 3;

    @media(min-width: 768px) {
            margin - top: 0;
    }
`;

const TechWrapper = styled.div`
    flex-wrap: wrap;
    display: flex;
    align-items: center;
`;

export default About;