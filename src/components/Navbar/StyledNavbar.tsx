import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = styled.div`
    width: 100%;
    height: 50px;
    background: #353535;
    color: #fff;
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    margin: 0;
    padding-top: 10px;
`;

export const NavigationContent = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`;
