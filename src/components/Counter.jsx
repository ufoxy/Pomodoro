import React from 'react';

import './Counter.css';

function Counter({ time }) {

    return (
        <div className='counter'>
            {time}
        </div>
    );
}

export default Counter;