import React from 'react';
import styled from 'styled-components';
import { Row } from 'antd';

const Container = styled(Row)`
    background: url(./background.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Arial Black', Gadget, sans-serif;
    height: 100vh;
    width: 100vw;
`;

export const PageContainer = ({ children, justify, align }) => {
    return (
        <Container justify={justify} align={align}>
            {children}
        </Container>
    );
};
