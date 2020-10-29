import React from 'react';
import styled from 'styled-components';
import Button from './extras/Button';
import Pill from './extras/Pill';

const About = () => {
    return <Wrapper>
        <InfoWrapper>
            <Title>About me</Title>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; Ever since I was a kid, I have always been fond of puzzles and brain teasers.
            I often find myself getting lost in time when thinking about solving a problem and not stopping until it is solved.
            I really enjoy the process and the feeling of fulfillment after finding a solution to a certain problem. It was only a matter of time for me
            to come accross programming and Software Development. It was a complete love at first "Hello World!" and it just keeps getting better!
                </p>
            <Button label="Read more"></Button>
        </InfoWrapper>
        <TechStack>
            <Title>Skills</Title>
            <TechWrapper>
                <Pill title="JavaScript" mastery={99} />
                <Pill title="C#" mastery={90} />
                <Pill title="React" mastery={99} />
                <Pill title="Angular" mastery={99} />
                <Pill title="NodeJs" mastery={99} />
                <Pill title="TypeScript" mastery={99} />
                <Pill title="SQL" mastery={90} />
                <Pill title="MongoDb" mastery={85} />
                <Pill title="Java" mastery={40} />
                <Pill title="Python" mastery={40} />
            </TechWrapper>
        </TechStack>
    </Wrapper>
};

const Wrapper = styled.div`
    margin: 16px 2%;
    color: #525e65;
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
            margin: 16px 15%;
        flex-direction: row;
    }

    @media(min-width: 1200px) {
            margin: 16px 25%;
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
            border - right: 2px solid #525e65;
    }
`;

const TechStack = styled.div`
    padding: 0 16px 0;
    flex: 3;
    margin-top: 16px;

    @media(min-width: 768px) {
            margin - top: 0;
    }
`;

const TechWrapper = styled.div`
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