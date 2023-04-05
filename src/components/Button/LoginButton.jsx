import React, { useState } from 'react';
import styled from 'styled-components';
import { LoginWrapper } from 'components/Login';

const BorderedButton = styled.div`
    font-weight: 600;
    color: white;
    padding: 0.5rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
    text-decoration: none;
    transition: .2s all;
    font-family: 'Rajdhani';

    &:hover {
        color: black;
    }

    &:active {
        /* Ŭ���� �Ʒ��� �̼��ϰ� ������ */
        transform: translateY(3px);
    }
`;

// �α���â�� �����ϴ� ������
function LoginButton() {
    // �α���â ���� ���� state
    const [modalOpen, setModalOpen] = useState(false);

    // �α���â ����
    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <div>
            <BorderedButton onClick={showModal}>Login</BorderedButton>
            {modalOpen && <LoginWrapper setModalOpen={setModalOpen} />}
        </div>
    );
}

export default LoginButton;