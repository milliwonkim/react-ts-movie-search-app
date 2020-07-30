import styled from 'styled-components';

export const StyledLoadMoreBtn = styled.div`
    position: sticky;
    bottom: 0;
    border: none;
    display: flex;
    width: 100vw;
    height: 7vh;
    justify-content: center;
    align-items: center;
    background: #3d3d3d;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: bold;
    font-size: 20px;

    &:hover {
        background-color: #0652dd;
    }
`;
