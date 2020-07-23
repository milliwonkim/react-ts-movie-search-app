import styled from 'styled-components';

export const AppDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const AppHeader = styled.header`
    background-color: #282c34;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 20px;
    cursor: pointer;
`;

export const ErrorMessageDiv = styled.div`
    margin: auto;
    font-weight: bold;
    color: rgb(161, 15, 15);
`;

export const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
`;

export const SearchSubmit = styled.input`
    padding: 5px;
    background-color: transparent;
    color: black;
    border: 1px solid black;
    width: 80px;
    margin-left: 5px;
    cursor: pointer;

    &:hover {
        background-color: #282c34;
        color: antiquewhite;
    }
`;

export const SearchText = styled.input`
    width: 40%;
    min-width: 170px;
`;

export const MoviesDiv = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    @media (max-width: 1430px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 1023px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 680px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 330px) {
        width: 80%;
    }
`;

export const MovieDiv = styled.div`
    width: 300px;
    cursor: pointer;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 4px 3px 30px -13px rgba(0, 0, 0, 0.75);
    margin: 20px;
`;
