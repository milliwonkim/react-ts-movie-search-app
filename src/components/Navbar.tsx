import React from 'react';
import { AppLogo, AppNav, StyledLink2, AppHeader } from '../styles/styles';

export const Navbar = () => {
    const authLinks = (
        <AppNav>
            <AppNav>
                <StyledLink2 to='/'>HOME</StyledLink2>
            </AppNav>
            <AppNav>
                <StyledLink2 to='/login'>LOGOUT</StyledLink2>
            </AppNav>
        </AppNav>
    );

    const guestLinks = (
        <AppNav>
            <AppNav>
                <StyledLink2 to='/'>HOME</StyledLink2>
            </AppNav>
            <AppNav>
                <StyledLink2 to='/login'>LOGIN</StyledLink2>
            </AppNav>
        </AppNav>
    );

    return (
        <AppHeader>
            <AppLogo>MOVIE FINDER</AppLogo>
            {guestLinks}
        </AppHeader>
    );
};
