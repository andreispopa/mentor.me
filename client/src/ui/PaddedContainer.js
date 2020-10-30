import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: ${(props) => props.padding || '2rem'};
`;

export const PaddedContainer = ({ children, ...props }) => {
    console.log(props);
    return <Container {...props}>{children}</Container>;
};
