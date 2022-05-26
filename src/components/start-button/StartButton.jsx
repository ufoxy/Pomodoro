import React from 'react';

import './StartButton.css';

function StartButton({ children, className, HandleStartButtonClick, HandleStartOrStop }) {

    return (
        <button 
        className={`start-button ${className}`}
        onClick={() => {
            HandleStartButtonClick()
            HandleStartOrStop()
        }}
        >
            {children}
        </button>
    );
}

export default StartButton;