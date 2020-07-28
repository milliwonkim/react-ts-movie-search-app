import React from 'react';
import { IMAGE_BASE_URL } from '../../config/keys';
import { StyledImg, ActorName, ActorNameDiv } from './StyledActor';

const Actor = ({ actor }) => {
    const POSTER_SIZE = 'w154';
    return (
        <div>
            <StyledImg
                src={
                    actor.profile_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        : 'https://semantic-ui.com/images/wireframe/image.png'
                }
                alt='actorthumb'
            />
            <ActorName>
                <ActorNameDiv>
                    <p>{actor.name}</p>
                    <pre>{actor.character}</pre>
                </ActorNameDiv>
            </ActorName>
        </div>
    );
};

export default Actor;
