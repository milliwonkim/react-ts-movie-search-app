import React from 'react';
import { calcTime, convertMoney } from '../../config/helper';
import {
    MovieinfoBar,
    MovieinfoBarContent,
    MovieinfoBarContentCol,
    MovieinfoBarInfo,
} from './StyledMovieInfoBar';

const MovieInfoBar = ({
    time,
    budget,
    revenue,
}: {
    time: number;
    budget: number;
    revenue: number;
}) => {
    return (
        <MovieinfoBar>
            <MovieinfoBarContent>
                <MovieinfoBarContentCol>
                    <MovieinfoBarInfo>
                        Running Time:{calcTime(time)}
                    </MovieinfoBarInfo>
                </MovieinfoBarContentCol>
                <MovieinfoBarContentCol>
                    <MovieinfoBarInfo>
                        Budget: {convertMoney(budget)}
                    </MovieinfoBarInfo>
                </MovieinfoBarContentCol>
                <MovieinfoBarContentCol>
                    <MovieinfoBarInfo>
                        Revenue: {convertMoney(revenue)}
                    </MovieinfoBarInfo>
                </MovieinfoBarContentCol>
            </MovieinfoBarContent>
        </MovieinfoBar>
    );
};

export default MovieInfoBar;
