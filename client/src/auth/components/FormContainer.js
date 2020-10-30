import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

const Container = styled(Col)`
    background-color: #ffffff;
    padding: 1.3rem;
`;

const Welcome = styled.div`
    text-align: center;
    padding-bottom: 2.3rem;
`;

const WelcomeTitle = styled.div`
    font-size: 2rem;
`;

const WelcomeMessage = styled.div`
    font-size: 1.2rem;
`;

export const FormContainer = ({ children, welcomeMessage, ...props }) => {
    return (
        <Container {...props}>
            <Welcome>
                <WelcomeTitle>Welcome to mentor.me!</WelcomeTitle>
                <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
            </Welcome>
            {children}
        </Container>
    );
};
