import React from 'react';
import styled from 'styled-components';
import Button from './extras/Button';
import Pill from './extras/Pill';

const ProjectItem = ({imgSource, stack, difficulties, solutions, title, description}) => {
    const border = {
        borderTop: "1px solid #aaa"
    }
    return <Wrapper>
        <Row>
            <ImageWrapper>
                <ProjectImg src={imgSource} />
            </ImageWrapper>
            <InfoWrapper>
                <ProjectTitle>{title}</ProjectTitle>
                <TechWrapper>
                    {stack.map(item => {
                        return <Pill title={item} key={item} />
                    })}
                </TechWrapper>
                <Description>
                <p>{description}</p>
                </Description>
                <InfoFooter><Button label="View Project"/><Button label="Github"/></InfoFooter>
            </InfoWrapper>
        </Row>
        <Row style={border}>
            <Difficulties>
                Difficulties
                <CustomList>
                    {difficulties.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                </CustomList>
            </Difficulties>
            <Solutions>
                Solutions
                <CustomList>
                    {solutions.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                </CustomList>
            </Solutions>
        </Row>
    </Wrapper>
};

const Wrapper = styled.div`
    margin: 8px 0;
    box-shadow: 0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2);
    padding: 16px;

    &:hover {
        box-shadow: 0 7px 20px 0 rgba(200,200,200,0.2), 0 4px 10px 0 rgba(200,200,200,0.2);
        transform: scale(1.02);
        transition: transform .3s;
    }
`;

const Row = styled.div`
    display: Flex;
    flex-direction: column;
    margin-bottom: 16px;

    @media(min-width: 768px) {
        flex-direction: row;
    }
`;

const ImageWrapper = styled.div`
    justify-content: center;
    display: flex;
    margin-bottom: 16px;

    @media(min-width: 768px) {
        margin-bottom: 0;
    }
`;

const InfoWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const InfoFooter = styled.div`
    margin-right: 8px;

    & button {
        margin: 0 4px;
    }
`;

const TechWrapper = styled.div`
    flex-wrap: wrap;
    display: flex;
    align-items: flex-start;
`;

const Description = styled.div`
    flex: 1;
    margin: 0 0 0 8px;
`;

const ProjectTitle = styled.h3`
    margin: 0 0 0 8px;
`;

const Difficulties = styled.div`
    flex: 1;
    margin-top: 8px;
`;

const Solutions = styled.div`
    flex: 1;
    margin-top: 8px;
`;

const ProjectImg = styled.img`
    border-radius: 4px;
    width: 250px;
    border: 2px solid #aaa;
    display: block;
    box-shadow: 0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2);
`;

const CustomList = styled.ul`
    margin-top: 0;
`;

export default ProjectItem;