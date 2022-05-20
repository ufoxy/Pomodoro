import React from 'react';

import './Counter.css';

function Counter({ children }) {
    return (
        <div className='counter'>
            {children}
        </div>
    );
}

export default Counter;