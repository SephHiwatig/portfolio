import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import BugsifyImage from '../assets/Bugsify_home.PNG';
import AlgoVisImage from '../assets/algo_vis.PNG';
import TicketImage from '../assets/ticket.PNG';

const Projects = () => {
    return <Wrapper>
        <Content>
            <Title>Projects</Title>
            <ProjectItem imgSource={BugsifyImage} title="Bugsify"></ProjectItem>
            <ProjectItem imgSource={AlgoVisImage} title="AlgoVisualizer"></ProjectItem>
            <ProjectItem imgSource={TicketImage} title="Ticketr"></ProjectItem>
        </Content>
    </Wrapper>
};

export default Projects;

const Wrapper = styled.div`
    background-color: #525e65;
    color: #ddd;
`;

const Content = styled.div`
    margin: 16px 2%;
    padding: 8px 16px;

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