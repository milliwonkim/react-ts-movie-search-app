import React from 'react';
import { AppHeader } from '../styles/styles';

const Header = ({ text }: { text: string }) => {
    return (
        <AppHeader>
            <h2>{text}</h2>
        </AppHeader>
    );
};

export default Header;
