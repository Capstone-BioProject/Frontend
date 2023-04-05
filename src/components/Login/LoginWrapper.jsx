import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtil';
import { Login } from 'containers/Login';

// ȭ���� �߾ӿ� ��ġ��Ų��
const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// �ʺ�, �׸��� ����
const ShadowedBox = styled.div`
    width: 400px;
    z-index: 999;
    ${shadow(2)}
`;

// �ΰ�
const LogoWrapper = styled.div`
    background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
    text-align: center;
    display: in-line;
`;

const Logo = styled.div`
    color: white;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    float: center;
    letter-spacing: 5px;
`;

// children �� ���� ��
const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;

const XButton = styled.button`
    background: transparent;
    border:none;
    font-weight: 600;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
    text-decoration: none;
    transition: .2s all;
    float: right;
    font-family: 'Rajdhani';

    &:hover {
        color: black;
    }

    &:active {
        /* Ŭ���� �Ʒ��� �̼��ϰ� ������ */
        transform: translateY(3px);
    }
`;

function AuthWrapper({ setModalOpen }) {
    // ��� ���� (X��ư onClick �̺�Ʈ �ڵ鷯)
    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <Positioner>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <ShadowedBox></ShadowedBox>
            <ShadowedBox>
                <LogoWrapper>
                    <Logo>React App<XButton onClick={closeModal}>X</XButton></Logo>
                </LogoWrapper>
                <Contents>
                    <Login></Login>
                </Contents>
            </ShadowedBox>
        </Positioner>
    );
}

export default AuthWrapper;