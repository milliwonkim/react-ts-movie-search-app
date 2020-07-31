import styled from 'styled-components';

export const Movieinfo = styled.div`
    display: flex;
    justify-content: center;
    background-size: cover !important;
    background-position: center !important;
    width: 100vw;
    height: 100vhpx;
    padding: 40px 20px;
    box-sizing: border-box;
    animation: animateMovieinfo 1s;
`;

export const MovieinfoContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 60vh;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);

    @media (max-width: 860px) {
        flex-direction: column;
        height: 110vh;
    }
`;

export const MovieinfoThumb = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 300px;
    height: auto;
    box-shadow: 0 0 10px gray;
    margin: 30px;
`;

export const MovieinfoText = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    width: 60vw;
    padding: 30px;
`;

export const Rating = styled.div`
    width: 250px;
    height: 20px;
    margin-top: 20px;
    position: relative;
`;

export const Score = styled.p`
    position: absolute;
    margin: 0;
    right: 0px;
    top: -3px;
`;

export const Director = styled.p`
    margin: 0;
`;

export const FaFilm = styled.div`
    position: absolute;
    bottom: 40px;
    right: 40px;
    color: #fff;
`;

export const Meter = styled.meter`
    background: transparent;
    border: none;
    width: 200px;
`;
