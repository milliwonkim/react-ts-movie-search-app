import React, { useState } from 'react';
import { SearchBar, SearchBarInput } from './StyledSearch';

const Search = ({ search }: { search: (string) => void }) => {
    /**
     * Debounce Hook을 커스텀으로 만들었는데, 검색 시 검색결과가
     * 1페이지에서는 잘 나오지만
     * 2페이지부터는 검색하지않은 것이 나온다.
     */

    // const handleDebounce = useCallback(
    //     debounce((value) => {
    //         search(value);
    //         console.log('searched');
    //     }, 50),
    //     []
    // );

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
