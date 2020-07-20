import React, { StatelessComponent } from 'react';

interface HeaderProps {
    props: object;
}

const Header: StatelessComponent<HeaderProps> = (props) => {
    const a = () => {
        console.log(typeof props);
    };

    return (
        <header className='App-header'>
            <h2 onClick={a}>{props.text}</h2>
        </header>
    );
};

export default Header;
