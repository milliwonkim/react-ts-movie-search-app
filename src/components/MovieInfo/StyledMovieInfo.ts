import styled from 'styled-components';

export const Movieinfo = styled.div`
    background-size: cover !important;
    background-position: center !important;
    width: 100%;
    height: 600px;
    padding: 40px 20px;
    box-sizing: border-box;
    animation: animateMovieinfo 1s;
`;

export const MovieinfoContent = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    position: relative;
`;

export const MovieinfoThumb = styled.div`
    width: 350px;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0px;
`;

export const MovieinfoText = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    width: auto;
    padding: 40px;
    color: #fff;
    overflow: hidden;
    box-sizing: border-box;
    position: absolute;
    left: 360px;
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
    background: #fff;
    width: 200px;
`;
