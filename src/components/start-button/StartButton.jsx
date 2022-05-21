import React from 'react';

import './StartButton.css';

function StartButton({ children, className }) {
    return (
        <button className={className}>
            {children}
        </button>
    );
}

export default StartButton;