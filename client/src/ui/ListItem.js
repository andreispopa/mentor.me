import React from 'react';
import styled from 'styled-components';

const Details = styled.div`
    font-size: 1.05rem;
    padding: 0 0 0 1.5rem;
`;

const DetailName = styled.span`
    font-weight: bold;
`;

export const ItemDetails = ({ children }) => {
    return <Details>{children}</Details>;
};

export const Detail = ({ children }) => {
    return <DetailName>{children}</DetailName>;
};
