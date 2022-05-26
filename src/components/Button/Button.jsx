import React from 'react';

import ButtonAudio from '../../assets/sounds/mixkit-single-classic-click-1116.wav'
import './Button.css'

function Button({ children, active, HandleAddTime, HandleSetAppStyle, HandleSetPomodoroDivStyle, HandleSetStartButtonStyle, HandleSetActiveButtonStyle, HandleSetProgressStyle }) {

    const audio = new Audio(ButtonAudio)

    const startAudio = () => {
    audio.play()
    }

    return (
        <button 
        className={`button ${active}`}
        onClick={() => {
            startAudio()
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