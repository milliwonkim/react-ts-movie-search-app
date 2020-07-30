import React from 'react';
import { StyledHeader, StyledLink } from './StyledHeader';

const Header = () => {
    return (
        <StyledHeader>
            <StyledLink to='/'>Movie Search App</StyledLink>
        </StyledHeader>
    );
};

export default Header;
