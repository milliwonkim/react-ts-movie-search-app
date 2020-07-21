import React from 'react';

type HeaderProps = {
    text: string;
};

const Header = ({ text }: HeaderProps) => {
    return (
        <header className='App-header'>
            <h2>{text}</h2>
        </header>
    );
};

export default Header;
