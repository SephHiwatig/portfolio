import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import BugsifyImage from '../assets/Bugsify_home.PNG';
import AlgoVisImage from '../assets/algo_vis.PNG';
import TicketImage from '../assets/ticket.PNG';
import './css/ProjectAnimation.css'

const Projects = () => {

    const bugsifyStack = ["React", "Redux", "NodeJs", "Express", "MongoDb", "Draft.js", "Ace.js"];
    const bugsifyDescription = "Algorithm questions in JavaScript. Provides users with a web based code editor and a console.";
    const bugsifyDifficulties = ["The application required authentication as well as authorization depending on user's role",
        "Code written by the user needs to be tested on the backend and may crash the server",
        "Repeated MongoDb connections not DRY",
        `Tests for each problem is entered through an Admin Panel. Storing test's arguments and outputs
        was very tricky for each function can have multiple complicated arguments (Arrays, matrix) and types
        needs to be specified`,
        "Questions needs to be stored with a certain format to be displayed on the client nicely"];
    const bugsifySolutions = [`I chose JWT token authentication to secure my application. Since I have an admin user on this application, token easily allowed me to secure each
        backend endpoint by role`, `I applied code insertion into the user's code by 
        transforming it into Abstract Syntax Tree to prevent it from crashing the server i.e Infinite loops.`,
        `A centralized file that handles all logic relating to MongoDb connection.
        I also took advantage of JavaScript's closure and currying to create a custom MongoDb API for basic CRUD operations.`,
        `I stored the test's arguments and outputs as a long string with their types. During the test, I parse them back to their proper types using a recursive function then I pass the results
        to the user's solution and compare the output. Recursive approach is neccesary to parse nested arrays. This was really fun as it felt like
        I'm playing Bugsify while building it`, "I used Draft.js to format, store and display the questions."];
    const bugsifyGitHub = "https://github.com/SephHiwatig/Bugsify";

    const algoVisStack = ["Angular", "TypeScript", "Data Structures", "Algorithms"];
    const algoVisDescription = `Visualizes the following algorithms: Selection Sort, Bubble Sort, Insertion Sort,
        Quick Sort, Linear Search, Binary Search, Jump Search, Dijkstra and A* path finding algorithm.`;
    const algoVisDifficulties = [`Learning the algorithms. Fun fact: At my work, there was a macro written around 15 years ago and still being used today.
        This macro generates a view but now takes around 33 seconds to load. My manager asked me to check if the databases is indexed properly or
        maybe a binary data is being retrieved from the database causing the slow response. I instead scan the code before going to the database and replaced
        a brute force sorting code block with Quick Sort. The macro now loads instantly`, "Animating the algorithms"];
    const algoVIsSolutions = ["I took time to learn the algorithms before starting the project. Resources like geeksforgeeks.org helped a lot.",
        "I replaced most of the loops of the algorithms with setInterval to delay the execution of each step while manipulating the dom elements."];
    const algoVisGitHub = "https://github.com/SephHiwatig/AlgoVisualizer";

    const ticketStack = ["Angular", ".NET Core", "Entity Framework", "MySql", "OOP Design Patterns"];
    const ticketDescription = `Bug tracking software for a team of developers. I needed a bug tracking application for my projects so I created my own.`;
    const ticketrDifficulties = ["Multiple forms for manipulating a ticket", "Separate library for Data Access Layer", "Database Versions/Migrations", "Database data integrity"];
    const ticketSolutions = ["I used Angular's reactive forms to validate each complicated form of a ticket.",
        "I used Entity Framework Code First approach to manage my Data Access layer and keep track of database migrations.",
        "To keep the data consistent, I applied a combination of Unit of Work and Repository Design Patterns on my Data Access Layer.",
        "I also used Decorator design pattern to add paging properties on .NET Core's List class. This helps me page the tickets on the Front-end."];
    const ticketGitHub = "https://github.com/SephHiwatig/TicketingSystem";

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;

        const bugsifyEl = document.querySelector('.Bugsify');
        const bugsifyTop = bugsifyEl.getBoundingClientRect().top;
        console.log(bugsifyTop, windowHeight);
        if (bugsifyTop < windowHeight) {
            if (!bugsifyEl.classList.contains('slide-up'))
                bugsifyEl.classList.add('slide-up');
        }

        const algoEl = document.querySelector('.AlgoVisualizer');
        const algoTop = algoEl.getBoundingClientRect().top;
        if (algoTop < windowHeight) {
            if (!algoEl.classList.contains('slide-up'))
                algoEl.classList.add('slide-up');
        }

        const ticketEl = document.querySelector('.Ticketr');
        const ticketTop = ticketEl.getBoundingClientRect().top;

        if (ticketTop < windowHeight) {
            if (!ticketEl.classList.contains('slide-up'))
                ticketEl.classList.add('slide-up');
        }
    });

    return <Wrapper id="projects">
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
    scroll-margin-top: 50px;
`;

const Content = styled.div`
    margin: 16px 2%;
    padding: 8px 16px;

    @media(min-width: 768px) {
        margin: 16px 10%;
    }

    @media(min-width: 1200px) {
        margin: 16px 15%;
    }
`;

const Title = styled.h2`
    position: relative;
    margin: 0;
`;