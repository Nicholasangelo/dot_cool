import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './NbuttonStyled';

const Nbutton = ({ text, handler, name, textStyle }) => (
    <StyledButton type='button' onClick={handler} name={name}>
        <h3 className={name} style={textStyle} data-id={name}>
            {text}
        </h3>
    </StyledButton>
);

Nbutton.propTypes = {
    text: PropTypes.string,
    handler: PropTypes.func,
    name: PropTypes.string,
    textStyle: PropTypes.any,
};

export default Nbutton;
