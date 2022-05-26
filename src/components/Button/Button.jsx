import React from 'react';

import './Button.css'

function Button({ children, active, HandleAddTime, HandleSetAppStyle, HandleSetPomodoroDivStyle, HandleSetStartButtonStyle, HandleSetActiveButtonStyle, HandleSetProgressStyle }) {

    return (
        <button 
        className={`button ${active}`}
        onClick={() => {
            HandleAddTime()
            HandleSetAppStyle()
            HandleSetPomodoroDivStyle()
            HandleSetStartButtonStyle()
            HandleSetActiveButtonStyle()
            HandleSetProgressStyle()
        }}
        >
            {children}
        </button>
    );
}

export default Button;