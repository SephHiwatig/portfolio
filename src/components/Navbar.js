import React from 'react';
import styled from 'styled-components';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    return <Wrapper>
        <Menu>
            <li>
                <AnimatedLink href="#" >Projects</AnimatedLink>
            </li>
            <li>
                <AnimatedLink href="#" >About</AnimatedLink>
            </li>
        </Menu>
        <IconsWrapper>
            <span>
                <IconLink href="https://www.linkedin.com/in/joseph-hiwatig" target="_blank">
                    <AiFillLinkedin />
                </IconLink>
            </span>
            <span>
                <IconLink href="#">
                    <AiOutlineGithub />
                </IconLink>
            </span>
        </IconsWrapper>
    </Wrapper>
};

export default Navbar;

const Wrapper = styled.nav`
    padding: 0 8px;
    display: flex;
    position: sticky;
    top: 0;
    align-items: center;
    justify-content: center;
    background-color: #525e65;
    box-shadow: 0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2);
`;

const Menu = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;

    & li {
        margin: 0 24px 0px 24px;
    }
`;

const AnimatedLink = styled.a`
    display: inline-block;
    color: #fff;
    text-decoration: none;

    &:after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        transition: width .3s;
    }

    &:hover::after {
        width: 100%;
        background: #fff;
    }
`;

const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;

    & span {
        margin: 0 8px 0 8px;
    }
`;

const IconLink = styled.a`
    display: inline-block;
    color: #fff;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
        transition: transform .2s;
    }
`;