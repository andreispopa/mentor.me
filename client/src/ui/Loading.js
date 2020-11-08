import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

import { PageLayout } from '../ui';

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(240, 242, 245);
    height: 100vh;
`;

const BiggerSpin = styled(Spin)`
    span {
        font-size: 2rem;
    }
`;

export const Loading = () => {
    return (
        <PageLayout>
            <Div>
                <BiggerSpin />
            </Div>
        </PageLayout>
    );
};
