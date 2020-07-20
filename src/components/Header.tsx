import React from 'react';

type HeaderProps = {
    text: string;
};

const Header = ({ text }: HeaderProps) => {
    const a = () => {
        console.log(typeof text);
    };

    return (
        <header className='App-header'>
            <h2 onClick={a}>{text}</h2>
        </header>
    );
};

export default Header;
