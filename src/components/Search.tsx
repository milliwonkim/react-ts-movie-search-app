import React, { useState, FormEvent, ChangeEvent } from 'react';
import { SearchText, SearchForm, SearchSubmit } from '../styles/styles';

const Search = ({ search }: { search: (searchValue: string) => void }) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchInputChanges = (
        e: ChangeEvent<HTMLInputElement>
    ): void => {
        setSearchValue(e.target.value);
    };

    const resetInputField = (): void => {
        setSearchValue('');
    };

    const callSearchFunction = (e: FormEvent): void => {
        e.preventDefault();
        search(searchValue);
        resetInputField();
    };

    return (
        <SearchForm onSubmit={callSearchFunction}>
            <SearchText
                value={searchValue}
                onChange={handleSearchInputChanges}
                type='text'
            />
            <SearchSubmit type='submit' value='SEARCH' />
        </SearchForm>
    );
};

export default Search;
