import React, { useState, FormEvent } from 'react';
import { SearchBar, SearchBarInput } from './StyledSearch';

const Search = ({ search }) => {
    const [value, setValue] = useState('');

    let timeout: any = null;

    const doSearch = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            search(value);
        }, 500);
    };

    return (
        <SearchBar>
            <SearchBarInput
                placeholder='Search'
                type='text'
                onChange={doSearch}
                value={value}
            />
        </SearchBar>
    );
};

export default Search;
