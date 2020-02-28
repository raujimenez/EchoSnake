import React from 'react';
import GridPoint from '../GridPoint.jsx';

function renderPortalDestination(board, portalCoordiantes) {
    const [pointX, pointY] = portalCoordiantes;
    if (pointX !== null) {
        board[pointY][pointX] = (<GridPoint 
            row={pointY + 1} 
            column={pointX + 1} 
            body={false} 
            fruit={false} 
            portalDestination={true} 
            />
        )
    }
}

export default renderPortalDestination;