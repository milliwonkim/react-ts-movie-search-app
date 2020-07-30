import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    flex-direction: row;
`;

export const NavigationContent = styled.div`
    margin: 0 30px;
`;

export const StyledAnchor = styled.a`
    color: white;
    text-decoration: none;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`;
