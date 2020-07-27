import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

export const StyledLink2 = styled(Link)`
    text-decoration: none;
    color: white;
`;

export const AppDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
`;

export const AppHeader = styled.header`
    letter-spacing: 1px;
    background-color: #282c34;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 20px;
    cursor: pointer;
`;

export const AppLogo = styled.div`
    font-weight: bold;
`;

export const AppNav = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    text-align: center;
    font-size: 17px;
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

export const InputDiv = styled.div`
    padding: 30px;
`;

export const InputText = styled.input`
    box-shadow: 4px 3px 30px -13px rgba(0, 0, 0, 0.75);
    text-align: center;
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 8px;
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
    border-radius: 8px;
    box-shadow: 4px 3px 30px -13px rgba(0, 0, 0, 0.75);
    margin: 20px;
`;

export const MovieSubDiv1 = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MovieSubDiv2 = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledButton = styled.button`
    margin: 5px;
    font-size: 15px;
    border-radius: 8px;
    border: 1px solid black;
    width: 70px;
    height: 20px;
`;

export const StyledFilter = styled.div`
    letter-spacing: 1px;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 20px;
    cursor: pointer;
`;

export const ProgressDiv = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;
