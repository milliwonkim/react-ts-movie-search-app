import React, { useState } from 'react';
import { SearchBar, SearchBarInput } from './StyledSearch';

const Search = ({ search }: { search: (string) => void }) => {
    const [value, setValue] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setValue(e.target.value);
        search(value);
    };

    return (
        <SearchBar>
            <SearchBarInput
                type='text'
                placeholder='Search'
                onChange={handleSearch}
                value={value}
            />
        </SearchBar>
    );
};

export default Search;
