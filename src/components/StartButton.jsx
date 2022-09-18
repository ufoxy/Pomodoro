import React from 'react';
import StartButtonAudio from '../assets/sounds/mixkit-mouse-click-close-1113.wav'
import './StartButton.css';

function StartButton({ children, className, HandleStartButtonClick, HandleStartOrStop }) {

    const audio = new Audio(StartButtonAudio)

    const startAudio = () => {
    audio.play()
    }

    return (
        <button 
        className={`start-button ${className}`}
        onClick={() => {
            startAudio()
            HandleStartButtonClick()
            HandleStartOrStop()
        }}
        >
            {children}
        </button>
    );
}

export default StartButton;