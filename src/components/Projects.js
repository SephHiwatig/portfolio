import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import BugsifyImage from '../assets/Bugsify_home.PNG';
import AlgoVisImage from '../assets/algo_vis.PNG';
import TicketImage from '../assets/ticket.PNG';

const Projects = () => {

    const bugsifyStack = ["React", "NodeJs", "Express", "MongoDb", "Draft.js", "Ace.js"];
    const bugsifyDescription = "Algorithm questions in JavaScript. Provides users with a web based code editor and a console.";
    const bugsifyDifficulties = ["Authentication", "Code written by the user needs to be tested on the backend",
     "Questions needs to be stored with a certain format to be displayed on the client nicely", "Multiple connections to MongoDb"];
    const bugsifySolutions = ["JWT token authentication", `I applied code insertion into the user's code by 
        transforming it into Abstract Syntax Tree to prevent it from crashing the server i.e Infinite loops.`,
        "I used Draft.js to format, store and display the questions.", `A centralized file that handles all logic relating to MongoDb connection.
        I also took advantage of JavaScript's closure and currying to create a custom MongoDb API for basic CRUD operations.`];
    const bugsifyGitHub = "https://github.com/SephHiwatig/Bugsify";

    const algoVisStack = ["Angular", "TypeScript", "Data Structures", "Algorithms"];
    const algoVisDescription = `Visualizes the following algorithms: Selection Sort, Bubble Sort, Insertion Sort,
        Quick Sort, Linear Search, Binary Search, Jump Search, Dijkstra and A* path finding algorithm.`;
    const algoVisDifficulties = ["Learning the algorithms", "Animating the algorithms"];
    const algoVIsSolutions = ["I took time to learn the algorithms before starting the project. Resources like geeksforgeeks.org helped a lot.",
        "I replaced most of the loops of the algorithms with setInterval to delay the execution of each step while manipulating the dom elements."];
    const algoVisGitHub = "https://github.com/SephHiwatig/AlgoVisualizer";

    const ticketStack = ["Angular", ".NET Core", "Entity Framework", "MySql", "OOP Design Patterns"];
    const ticketDescription = `Bug tracking software for a team of developers.`;
    const ticketrDifficulties = ["Multiple forms for manipulating a ticket", "Database data integrity"];
    const ticketSolutions = ["I used Angular's reactive forms to validate each complicated form of a ticket.",
        "To keep the data consistent, I applied a combination of Unit of Work and Repository Design Patterns on my Data Access Layer.", 
        "I also used Decorator design pattern to add paging properties on .NET Core's List class. This helps me page the tickets on the Front-end."];
    const ticketGitHub = "https://github.com/SephHiwatig/TicketingSystem";

    return <Wrapper>
        <Content>
            <Title>Projects</Title>
            <ProjectItem imgSource={BugsifyImage} 
                title="Bugsify" 
                stack={bugsifyStack}
                description={bugsifyDescription}
                difficulties={bugsifyDifficulties}
                solutions={bugsifySolutions}
                gitHub={bugsifyGitHub}></ProjectItem>
            <ProjectItem imgSource={AlgoVisImage} 
                title="AlgoVisualizer" 
                stack={algoVisStack}
                description={algoVisDescription}
                difficulties={algoVisDifficulties}
                solutions={algoVIsSolutions}
                gitHub={algoVisGitHub}></ProjectItem>
            <ProjectItem imgSource={TicketImage} 
                title="Ticketr" 
                stack={ticketStack}
                description={ticketDescription}
                difficulties={ticketrDifficulties}
                solutions={ticketSolutions}
                gitHub={ticketGitHub}></ProjectItem>
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
        margin: 16px 10%;
    }

    @media(min-width: 1200px) {
        margin: 16px 25%;
    }
`;

const Title = styled.h2`
    position: relative;
    margin: 0;
`;