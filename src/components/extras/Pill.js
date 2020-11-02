import React from 'react';
import styled from 'styled-components';

const Pill = ({ title, mastery, showMastery }) => {
    const style = {
        width: mastery + '%',
        height: '100%',
        backgroundColor: "#00458b",
        borderRadius: '8px'
    }
    return <SpanPill>
        {title}
        {showMastery && <ToolTip>
            <Tip />
            Mastery
            <Bar><div style={style}></div></Bar>
        </ToolTip>}
    </SpanPill>;
};

const SpanPill = styled.span`
    padding: 4px 8px;
    margin: 4px;
    border-radius: 15px;
    background-color: #24292e;
    color: orange;
    text-align: center;
    position: relative;
    cursor: default;
    border: 2px solid transparent;

    &:hover {
        // transform: scale(1.05);
        // transition: transform .2s;
        background-color: orange;
        color: #24292e;
        border: 2px solid #24292e;
        transition: background-color .3s;
    }

    &:hover span {
        display: inline;
    }
`;

const ToolTip = styled.span`
    padding: 4px 8px;
    margin: 4px;
    border-radius: 4px;
    background-color: #ddd;
    color: #000;
    position: absolute;
    top: 35px;
    left: 0;
    font-size: 14px;
    display: none;
    z-index: 99 !important;
`;

const Tip = styled.div`
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
    background-color: #ddd;
    position: absolute;
    Bottom: 37px;
`;

const Bar = styled.div`
    height: 14px;
    width: 150px;
    border: 2px solid rgba(80, 80, 80);
    border-radius: 8px;
`;

export default Pill;