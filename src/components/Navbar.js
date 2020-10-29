import React from 'react';
import styled from 'styled-components';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    return <Wrapper>
        <Menu>
            <li>
                <AnimatedLink href="#">Home</AnimatedLink>
            </li>
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
    padding: 8  px;
    display: flex;
    position: sticky;
    top: 0;
    align-items: center;
    justify-content: center;
`;

const Menu = styled.ul`
    display: flex;
    list-style-type: none;
    padding-left: 0;

    & li {
        margin: 0 24px 10px 24px;
    }
`;

const AnimatedLink = styled.a`
    display: inline-block;
    color: #000;
    text-decoration: none;

    &:after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #fff;
        transition: width .3s;
    }

    &:hover::after {
        width: 100%;
        background: #000;
    }
`;

const IconsWrapper = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    font-size: 24px;

    & span {
        margin: 0 8px 0 8px;
    }
`;

const IconLink = styled.a`
    display: inline-block;
    color: #000;
    text-decoration: none;
`;