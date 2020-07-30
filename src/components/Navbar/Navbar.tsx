import React from 'react';
import {
    Navigation,
    NavigationContent,
    StyledLink,
    StyledAnchor,
} from './StyledNavbar';

interface IMovie {
    movie: string;
}

const Navbar = ({ movie }: { movie: IMovie }) => {
    return (
        <Navigation>
            <NavigationContent>
                <StyledLink to='/'>
                    <p>Home</p>
                </StyledLink>
            </NavigationContent>
            <p>/</p>
            <NavigationContent>
                <StyledAnchor
                    href={`https://www.youtube.com/results?search_query=${movie}`}>
                    <p>{movie}</p>
                </StyledAnchor>
            </NavigationContent>
        </Navigation>
    );
};
export default Navbar;
