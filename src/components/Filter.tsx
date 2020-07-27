import React from 'react';
import { StyledButton } from '../styles/styles';

const Button = ({ updateValue, letter }) => {
    const handleOnClick = () => {
        updateValue(letter);
    };

    return (
        <div>
            <StyledButton onClick={handleOnClick}>{letter}</StyledButton>
        </div>
    );
};

export default Button;
