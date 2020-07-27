import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.div`
    width: 100vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1c1c1c;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 25px;
`;

export const Logo = styled.div`
    width: 300px;
    margin-top: 20px;
    float: left;
`;
