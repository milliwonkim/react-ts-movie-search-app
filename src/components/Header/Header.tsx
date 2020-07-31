import React from 'react';
import { StyledHeader, StyledLink } from './StyledHeader';

const Header: React.FC = () => {
    return (
        <StyledLink to='/'>
            <StyledHeader>Movie Search App</StyledHeader>
        </StyledLink>
    );
};

export default Header;
