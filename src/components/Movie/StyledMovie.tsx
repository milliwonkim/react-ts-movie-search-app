import styled from 'styled-components';

export const MovieGrid = styled.div`
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 4fr));
    justify-items: center;
    align-items: center;
    grid-gap: 20px;
`;

export const BottomLoad = styled.div`
    position: sticky;
    bottom: 0;
`;
