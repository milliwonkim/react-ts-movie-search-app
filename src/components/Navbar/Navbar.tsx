import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, NavigationContent } from './StyledNavbar';

const Navbar = ({ movie }) => {
    return (
        <Navigation>
            <NavigationContent>
                <Link to='/'>
                    <p>Home</p>
                </Link>
                <p>{movie}</p>
            </NavigationContent>
        </Navigation>
    );
};
export default Navbar;
