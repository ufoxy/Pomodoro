import React from 'react';

import Button from '../button/Button.jsx';
import Counter from '../counter/Counter.jsx';
import StartButton from '../start-button/StartButton.jsx';
import './PomodoroCounter.css';

function PomodoroCounter({ HandleAddTime, HandleSetStyle, time }) {

    return (
            <div className="pomodoro-counter pomodoro-counter-container">
            <div
            >
                <Button
                children={"Pomodoro"}
                HandleAddTime={HandleAddTime}
                HandleSetStyle={() => HandleSetStyle("pomodoro-style")}
                time={"25:00"}
                />
                <Button
                children={"Short Break"}
                HandleAddTime={HandleAddTime}
                HandleSetStyle={() => HandleSetStyle("short-break-style")}
                time={"05:00"}
                />
                <Button
                children={"Long Break"}
                HandleAddTime={HandleAddTime}
                HandleSetStyle={() => HandleSetStyle("long-break-style")}
                time={"15:00"}
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