import React from 'react';
import { AppNav, StyledLink2, AppHeader } from '../styles/styles';

const Navbar = ({ auth, dispatch }) => {
    const logout = () => {
        dispatch({
            type: 'AUTH_FAIL',
        });
    };

    const authLinks = (
        <AppNav>
            <AppNav>
                <StyledLink2 to='/dashboard'>DASHBOARD</StyledLink2>
            </AppNav>
            <AppNav>
                <StyledLink2 onClick={logout} to='/login'>
                    LOGOUT
                </StyledLink2>
            </AppNav>
        </AppNav>
    );

    const guestLinks = (
        <AppNav>
            <AppNav>
                <StyledLink2 to='/login'>LOGIN</StyledLink2>
            </AppNav>
        </AppNav>
    );

    return (
        <>
            <AppHeader>
                <StyledLink2 to='/'>MOVIE FINDER</StyledLink2>
                {auth ? authLinks : guestLinks}
            </AppHeader>
        </>
    );
};

export default Navbar;
