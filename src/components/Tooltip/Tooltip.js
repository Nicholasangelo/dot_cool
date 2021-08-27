import PropTypes from 'prop-types';
import React from 'react';
import { Tip } from './TooltipStyled';

const Tooltip = ({ text, toolName, align }) => (
    <Tip alignment={align} className={toolName}>
        <p>{text}</p>
    </Tip>
);

Tooltip.propTypes = {
    text: PropTypes.string,
    toolName: PropTypes.string,
    align: PropTypes.string,
};

export default Tooltip;
