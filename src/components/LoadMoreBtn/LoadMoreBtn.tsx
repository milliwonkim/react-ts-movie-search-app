import React from 'react';
import { StyledLoadMoreBtn } from './StyledLoadMoreBtn';

const LoadMoreBtn = ({ text, onClick }) => {
    return (
        <StyledLoadMoreBtn onClick={onClick}>
            <h2>{text}</h2>
        </StyledLoadMoreBtn>
    );
};
export default LoadMoreBtn;
