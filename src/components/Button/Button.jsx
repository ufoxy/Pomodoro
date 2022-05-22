import React from 'react';

import './Button.css'

function Button({ children, HandleAddTime, HandleSetAppStyle, HandleSetPomodoroDivStyle, HandleSetStartButtonStyle }) {

    return (
        <button 
        className="button"
        onClick={() => {
            HandleAddTime()
            HandleSetAppStyle()
            HandleSetPomodoroDivStyle()
            HandleSetStartButtonStyle()
        }}
        >
            {children}
        </button>
    );
}

export default Button;