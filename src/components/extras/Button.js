import React from 'react';
import styled from 'styled-components';

const Button = ({ label, click }) => {
    return <CustomButton type="button" onClick={click}>{label}</CustomButton>
};

const CustomButton = styled.button`
    padding: 8px;
    background-color: #24292e;
    color: #ddd;
    border-radius: 4px;
    cursor: pointer;
    border: 2px solid #525e65;

    &:active {
        transform: scale(.9);
        transition: transform .2s;
    }

    &:focus {
        outline: none;
    }
`;

export default Button;