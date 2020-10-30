import React from 'react';
import styled from 'styled-components';
import { Grid } from 'antd';

import { PageContainer } from '../../ui';
import { ReactComponent as Error } from './404.svg';

const { useBreakpoint } = Grid;

const ErrorContainer = styled.div`
    position: relative;
`;

const ErrorMessage = styled.h1`
    font-size: ${(props) => (props.screenSize.lg ? '50px' : '20px')};
    padding-right: 12px;
    color: #ffffff;
    animation: type 0.5s alternate infinite;

    @keyframes type {
        from {
            box-shadow: inset -3px 0px 0px #888;
        }
        to {
            box-shadow: inset -3px 0px 0px transparent;
        }
    }
`;

const ErrorSVG = styled(Error)`
    max-width: ${(props) => (props.screenSize.lg ? '30%' : '20%')};
    margin-right: 1.7rem;
    height: auto;
`;

export const ErrorPage = () => {
    const screenSize = useBreakpoint();
    return (
        <PageContainer justify="center" align="middle">
            <ErrorSVG screenSize={screenSize} />
            <ErrorContainer className="fof">
                <ErrorMessage screenSize={screenSize}>
                    Error 404 | Page Not Found
                </ErrorMessage>
            </ErrorContainer>
        </PageContainer>
    );
};
