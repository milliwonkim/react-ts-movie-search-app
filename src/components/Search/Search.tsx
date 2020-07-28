import React, { useState, FormEvent, useCallback } from 'react';
import { SearchBar, SearchBarInput } from './StyledSearch';

import debounce from '../../config/debounce';

const Search = ({ search }) => {
    const handleDebounce = useCallback(
        debounce((value) => {
            search(value);
            console.log('searched');
        }, 500),
        []
    );

    const [value, setValue] = useState('');

    const doSearch = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        handleDebounce(e.target.value);
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
