import React from 'react';
import styled from 'styled-components';
import Button from './extras/Button';

const About = () => {
    return <Wrapper>
        <Title>About me</Title>
        <Body>
            <InfoWrapper>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; Ever since I was a kid, I have always been fond of puzzles and brain teasers.
                I often find myself getting lost in time when thinking about solving a problem and not stopping until it is solved.
                I really enjoy the process and the feeling of fulfillment after finding a solution to a certain problem. It was only a matter of time for me
                to come accross programming and Software Development. It was a complete love at first "Hello World!" and it just keeps getting better!
                </p>
                <Button label="Read more"></Button>
            </InfoWrapper>
            <TechStack>
                <Tech>JavaScript</Tech>
                <Tech>C#</Tech>
                <Tech>Java</Tech>
                <Tech>Python</Tech>
                <Tech>React</Tech>
                <Tech>Angular</Tech>
                <Tech>NodeJs</Tech>
                <Tech>TypeScript</Tech>
                <Tech>SQL</Tech>
                <Tech>MongoDb</Tech>
            </TechStack>
        </Body>
    </Wrapper>
};

const Wrapper = styled.div`
    margin: 16px 2%;
    color: #525e65;

    @media(min-width: 768px) {
        margin: 16px 15%;
    }

    @media(min-width: 1200px) {
        margin: 16px 25%;
    }
`;

const Title = styled.h2`
    position: relative;
    margin: 0;
`;

const Body = styled.div`
    display: flex;
`;

const InfoWrapper = styled.div`
    flex: 7;
    padding: 0 16px 0;
    border-right: 2px solid #525e65;
`;

const TechStack = styled.div`
    padding: 0 16px 0;
    flex: 3;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
`;

const Tech = styled.span`
    padding: 4px 8px;
    margin: 4px;
    border-radius: 8px;
    border-radius: 15px;
    background-color: #24292e;
    color: orange;
    text-align: center;
`;

export default About;