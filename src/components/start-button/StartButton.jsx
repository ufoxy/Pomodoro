import React from 'react';

import './StartButton.css';

function StartButton({ children, className, HandleStartButtonClick }) {
    return (
        <button 
        className={className}
        onClick={() => {
            HandleStartButtonClick()
        }}
        >
            {children}
        </button>
    );
}

export default StartButton;