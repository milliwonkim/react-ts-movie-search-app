import React from 'react';
import {
    StyledHeroImage,
    HeroImageContent,
    HeroImageText,
    StyledLink,
} from './StyledHeroImage';

const HeroImage = ({
    image,
    title,
    text,
    movieId,
}: {
    image: any;
    title: string;
    text: string;
    movieId: string;
}) => {
    return (
        <div>
            <StyledLink
                to={{
                    pathname: `/${movieId}`,
                }}>
                <StyledHeroImage
                    style={{
                        background: `linear-gradient(to bottom, 
          rgba(0,0,0,0) 39%
        , rgba(0,0,0,0) 41%
        , rgba(0,0,0,0.65) 100%), url('${image}'),#1c1c1c`,
                    }}>
                    <HeroImageContent>
                        <HeroImageText className='rmdb-heroimage-text'>
                            <h1>{title}</h1>
                            <p>{text}</p>
                        </HeroImageText>
                    </HeroImageContent>
                </StyledHeroImage>
            </StyledLink>
        </div>
    );
};
export default HeroImage;
