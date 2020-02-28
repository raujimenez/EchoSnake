import React from 'react';

function GridPoint(props) {
    const row = props.row;
    const col = props.column;

    const GridPointStyles = {
        gridRow: row,
        gridColumn: col,
        padding: '10px',
        backgroundColor: 'whitesmoke',
        borderStyle: 'solid',
        borderWidth: '0.1px'
    }

    return (
        <div style={GridPointStyles}>
        </div>
    )
}

export default GridPoint;