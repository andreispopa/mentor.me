import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    align-items: center;
`;

const TitleSpan = styled.span`
    font-size: 2rem;
    margin-right: 1.2rem;
`;

export const TitleSection = ({ children }) => {
    return <Section>{children}</Section>;
};

export const Title = ({ children }) => {
    return <TitleSpan>{children}</TitleSpan>;
};
