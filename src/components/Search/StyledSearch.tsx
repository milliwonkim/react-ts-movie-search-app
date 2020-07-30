import styled from 'styled-components';

export const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    height: 100px;
    padding: 25px 20px 0px 20px;
`;

export const SearchBarInput = styled.input`
    border: 0;
    border-bottom: 5px solid white;
    text-align: center;
    font-size: 38px;
    background: transparent;
    height: 40px;
    color: #fff;
    margin: 15px 0 0 40px;

    &:focus {
        outline: none;
        border-bottom: 5px solid #0652dd;
    }

    @media screen and (max-width: 720px) {
        font-size: 28px;
        color: #fff;
    }
`;
