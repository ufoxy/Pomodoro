import React from 'react';

import './Button.css'

function Button({ children, HandleAddTime, HandleSetAppStyle, HandleSetPomodoroDivStyle }) {

    return (
        <button 
        className='button'
        onClick={() => {
            HandleAddTime()
            HandleSetAppStyle()
            HandleSetPomodoroDivStyle()
        }}
        >
            {children}
        </button>
    );
}

export default Button;