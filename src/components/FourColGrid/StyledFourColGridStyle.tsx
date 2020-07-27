import styled, { keyframes } from 'styled-components';

export const GridElement = styled.div`
    margin: 0 130px 130px 0;
    box-shadow: 0 0 10px;
    width: 20vw;
    height: 35vh;
    animation: animateGrid 0.5s;
`;

export const GridContent = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    @media screen and (max-width: 720px) {
        grid-template-columns: auto auto;
    }
`;

export const animateGrid = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;
