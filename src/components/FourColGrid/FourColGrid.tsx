import React from 'react';
import PropTypes from 'prop-types';
import { GridContent, GridElement } from './StyledFourColGridStyle';

const FourColGrid = ({ children, loading, header }) => {
    const renderElements = () => {
        const gridElements = children.map((element, i) => {
            return <GridElement key={i}>{element}</GridElement>;
        });
        return gridElements;
    };

    return (
        <div className='rmdb-grid'>
            {header && !loading ? <h1>{header}</h1> : null}
            <GridContent>{renderElements()}</GridContent>
        </div>
    );
};

FourColGrid.propTypes = {
    header: PropTypes.string,
    loading: PropTypes.bool,
};

export default FourColGrid;
