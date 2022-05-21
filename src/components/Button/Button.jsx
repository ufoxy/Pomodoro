import React from 'react';

import './Button.css'

function Button({ children, HandleAddTime, HandleSetStyle, time }) {

    return (
        <button 
        className='button'
        onClick={() => {
            HandleAddTime(time)
            HandleSetStyle()
        }}
        >
            {children}
        </button>
    );
}

export default Button;