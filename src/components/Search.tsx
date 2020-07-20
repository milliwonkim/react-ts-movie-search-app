import React, { useState } from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState<String>('');

    const handleSearchInputChanges = (
        e: React.FormEvent<HTMLInputElement>
    ): void => {
        setSearchValue(e.target.value);
    };

    const resetInputField = (): void => {
        setSearchValue('');
    };

    const callSearchFunction = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    };

    return (
        <form className='search' onSubmit={callSearchFunction}>
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type='text'
            />
            <input type='submit' value='SEARCH' />
        </form>
    );
};

export default Search;
