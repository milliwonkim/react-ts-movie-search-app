import React from 'react';
import { calcTime, convertMoney } from '../../helper';
import FontAwsome from 'react-fontawesome';
import {
    MovieinfoBar,
    MovieinfoBarContent,
    MovieinfoBarContentCol,
    MovieinfoBarInfo,
} from './StyledMovieInfoBar';

export default function MovieInfoBar(props) {
    return (
        <MovieinfoBar>
            <MovieinfoBarContent>
                <MovieinfoBarContentCol>
                    <FontAwsome className='fa-time' name='clock-o' size='2x' />
                    <MovieinfoBarInfo>
                        Running Time:{calcTime(props.time)}
                    </MovieinfoBarInfo>
                </MovieinfoBarContentCol>
                <MovieinfoBarContentCol>
                    <FontAwsome className='fa-budget' name='money' size='2x' />
                    <MovieinfoBarInfo>
                        Budget: {convertMoney(props.budget)}
                    </MovieinfoBarInfo>
                </MovieinfoBarContentCol>
                <MovieinfoBarContentCol>
                    <FontAwsome
                        className='fa-revenue'
                        name='ticket'
                        size='2x'
                    />
                    <MovieinfoBarInfo>
                        Revenue: {convertMoney(props.revenue)}
                    </MovieinfoBarInfo>
                </MovieinfoBarContentCol>
            </MovieinfoBarContent>
        </MovieinfoBar>
    );
}
