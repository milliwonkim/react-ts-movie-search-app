import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeroImage = styled.div`
    background-size: 100%, cover !important;
    background-position: center, center !important;
    width: 100%;
    height: 600px;
    position: relative;
    animation: animateHeroimage 1s;
`;

export const NoImage = styled.div`
    background-size: 100%, cover !important;
    background-position: center, center !important;
    width: 100%;
    height: 600px;
    position: relative;
    animation: animateHeroimage 1s;
`;

export const animateHeroImage = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

export const HeroImageContent = styled.div`
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
`;

export const HeroImageText = styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    background: rgba(0, 0, 0, 0);
    color: #fff;

    @media screen and (max-width: 720px) {
        max-width: 100%;
    }
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`;
