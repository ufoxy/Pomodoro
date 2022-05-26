import React from 'react';

import './Button.css'

function Button({ children, active, HandleAddTime, HandleSetAppStyle, HandleSetPomodoroDivStyle, HandleSetStartButtonStyle, HandleSetStyleButton }) {

    return (
        <button 
        className={`button ${active}`}
        onClick={() => {
            HandleAddTime()
            HandleSetAppStyle()
            HandleSetPomodoroDivStyle()
            HandleSetStartButtonStyle()
            HandleSetStyleButton()
        }}
        >
            {children}
        </button>
    );
}

export default Button;