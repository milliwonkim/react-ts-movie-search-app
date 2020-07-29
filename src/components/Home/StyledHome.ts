import styled from 'styled-components';

export const HomeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 4fr));
    justify-items: center;
    align-items: center;
    grid-gap: 30px;
    margin: 30px 30px;
`;

export const StyledProgress = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
`;
