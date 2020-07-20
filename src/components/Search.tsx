import React, { useState } from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState<String>('');

    const handleSearchInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const resetInputField = () => {
        setSearchValue('');
    };

    const callSearchFunction = (e: React.FormEvent<HTMLInputElement>) => {
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