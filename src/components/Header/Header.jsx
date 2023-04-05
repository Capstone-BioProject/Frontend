import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from 'lib/styleUtil';

// ��� ����, �׸���
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
    ${shadow(1)}
`;

// ���� oc.teal, ���� �߰� ����
const HeaderBackground = styled.div`
    background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
    display: flex;

    height: auto;
    ${shadow(1)};
`;

// �ش��� ����
const HeaderContents = styled.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;

// �ΰ�
const Logo = styled.div`
    font-size: 2rem;
    letter-spacing: 2px;
    color: white;
    font-family: 'Rajdhani';
`;

// �߰� ����
const Spacer = styled.div`
    flex-grow: 1;
`;

const Header = ({children}) => {
    return (
        <Positioner>
            <HeaderBackground>
                <HeaderContents>
                    <Logo>React App</Logo>
                    <Spacer/>
                    {children}
                </HeaderContents>
            </HeaderBackground>
        </Positioner>
    );
};

export default Header;