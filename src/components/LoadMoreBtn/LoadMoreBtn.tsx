import React from 'react';
import { StyledLoadMoreBtn } from './StyledLoadMoreBtn';

const LoadMoreBtn = ({
    text,
    onClick,
}: {
    text: string;
    onClick: () => void;
}) => {
    return (
        <StyledLoadMoreBtn onClick={onClick}>
            <p>{text}</p>
        </StyledLoadMoreBtn>
    );
};
export default LoadMoreBtn;
