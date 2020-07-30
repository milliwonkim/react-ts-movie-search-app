import styled from 'styled-components';

export const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    height: 50px;
    padding: 25px 20px 0px 20px;
`;

export const SearchBarInput = styled.input`
    border: 0;
    border-bottom: 5px solid white;
    text-align: center;
    font-size: 25px;
    background: transparent;
    height: 15px;
    color: #fff;
    margin: 0 0 0 30px;
    padding: 5px;

    &:focus {
        outline: none;
        border-bottom: 5px solid #0652dd;
    }

    @media screen and (max-width: 720px) {
        font-size: 28px;
        color: #fff;
    }
`;
