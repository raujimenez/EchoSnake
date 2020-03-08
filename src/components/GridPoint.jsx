import React from 'react';

function GridPoint(props) {
    const row = props.row;
    const col = props.column;
    const containsBody = props.body;
    const containsFruit = props.fruit;
    const portalDestination = props.portalDestination;

    const GridPointStyles = {
        gridRow: row,
        gridColumn: col,
        padding: '10px',
        backgroundColor: portalDestination ? 'orange': 
                         containsFruit ? 'red' : 
                         containsBody ? 'green' :
                         'whitesmoke',
        borderStyle: 'none',
        borderWidth: '0.1px'

    }

    return (
        <div style={GridPointStyles}>
        </div>
    )
}

export default GridPoint;