import React from 'react';
import HeaderBarStyles from './styles/HeaderBar.css';

function HeaderBar(props) {
    return (
        <div className='headerBar'>
            <div className='logoIcon'>logo</div>
            <div className='middleContent'>middle content</div>
            <div className='headerSettings'>settings</div>
        </div>
    )
}

export default HeaderBar;