import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

const MenuContents = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 80%;
    margin: 0 auto;
`;

const Menu = styled(Link)`
    font-size: 1rem;
    color: black;
    letter-spacing: 1px;
    font-family: 'Rajdhani';
    text-decoration: none;
    padding: 1rem 5rem 1rem 0;

    &:hover {
        font-size: 1.2rem;
        color: ${oc.teal[8]};
    }

    &:active {
        /* 마우스 클릭시 아래로 미세하게 움직임 */
        transform: translateY(3px);
    }
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;


const DefaultMenu = () => {
    return (
        <div>
            <MenuContents>
                <Menu to="/">Home</Menu>
                <Menu to="/medi">Diagnosis</Menu>
                <Menu to="/hospital">Hospital</Menu>
                <Menu to="/diary">Diary</Menu>
            </MenuContents>
            <GradientBorder/>
        </div>
    );
};

export default DefaultMenu;