import React from 'react';
import { Navigation, NavigationContent, StyledLink } from './StyledNavbar';

const Navbar = ({ movie }) => {
    return (
        <Navigation>
            <NavigationContent>
                <StyledLink to='/'>
                    <p>Home</p>
                </StyledLink>
                <p>/</p>
                <p>{movie}</p>
            </NavigationContent>
        </Navigation>
    );
};
export default Navbar;
