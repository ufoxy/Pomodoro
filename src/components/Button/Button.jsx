import React from 'react';

import './Button.css'

function Button({ children, HandleAddTime, time }) {

    return (
        <button 
        className='button'
        onClick={() => HandleAddTime(time)}
        >
            {children}
        </button>
    );
}

export default Button;