import React, { useState } from 'react';

import Button from '../button/Button.jsx';
import Counter from '../counter/Counter.jsx';
import StartButton from '../start-button/StartButton.jsx';
import './PomodoroCounter.css';

function PomodoroCounter({ HandleAddTime, HandleSetAppStyle, time }) {

    const [style, setStyle] = useState('pomodoro-counter-style')

    function HandleSetPomodoroDivStyle(style) {
        let value = style
        setStyle(value)
    }

    return (
            <div className={`pomodoro pomodoro-container ${style}`}>
            <div
            >
                <Button
                children={"Pomodoro"}
                HandleAddTime={() => HandleAddTime("25:00")}
                HandleSetAppStyle={() => HandleSetAppStyle("pomodoro-style")}
                HandleSetPomodoroDivStyle={() => HandleSetPomodoroDivStyle("pomodoro-counter-style")}
                />
                <Button
                children={"Short Break"}
                HandleAddTime={() => HandleAddTime("05:00")}
                HandleSetAppStyle={() => HandleSetAppStyle("short-break-style")}
                HandleSetPomodoroDivStyle={() => HandleSetPomodoroDivStyle("pomodoro-short-break-style")}
                />
                <Button
                children={"Long Break"}
                HandleAddTime={() => HandleAddTime("15:00")}
                HandleSetAppStyle={() => HandleSetAppStyle("long-break-style")}
                HandleSetPomodoroDivStyle={() => HandleSetPomodoroDivStyle("pomodoro-long-break-style")}
                />
            </div>
            <div>
                <Counter children={time} />
            </div>
            <div>
                <StartButton
                className={"button-start"}
                children={"START"} />
            </div>
        </div>
    );
}

export default PomodoroCounter;