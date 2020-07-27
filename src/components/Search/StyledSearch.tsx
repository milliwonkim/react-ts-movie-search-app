import styled from 'styled-components';

export const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100px;
    background: #1c1c1c;
    padding: 25px 20px 0px 20px;
    box-sizing: border-box;
`;

export const SearchBarInput = styled.input`
    border: 0;
    border-bottom: 1px solid white;
    text-align: center;
    font-size: 38px;
    background: transparent;
    height: 40px;
    color: #fff;

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 720px) {
        font-size: 28px;
        color: #fff;
    }
`;
