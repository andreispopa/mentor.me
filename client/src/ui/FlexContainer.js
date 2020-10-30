import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

export const FlexContainer = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};
