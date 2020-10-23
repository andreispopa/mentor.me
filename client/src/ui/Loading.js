import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const Div = styled.div`
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
`;

export const Loading = () => {
    return (
        <Div>
            <Spin />
        </Div>
    );
};
