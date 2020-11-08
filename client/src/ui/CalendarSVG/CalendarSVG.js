import React from 'react';
import styled from 'styled-components';
import { Grid } from 'antd';

import { ReactComponent as Calendar } from './calendar.svg';

const { useBreakpoint } = Grid;

const SVG = styled(Calendar)`
    display: ${(props) => (props.screensize.lg ? 'block' : 'none')};
    width: ${(props) => props.screensize.lg && '30%'};
    margin-right: 5rem;
`;

export const CalendarSVG = () => {
    const screenSize = useBreakpoint();

    return <SVG screensize={screenSize} />;
};
