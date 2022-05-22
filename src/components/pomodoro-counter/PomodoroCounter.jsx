import React, { useState } from 'react';

import Button from '../button/Button.jsx';
import Counter from '../counter/Counter.jsx';
import StartButton from '../start-button/StartButton.jsx';
import './PomodoroCounter.css';

function PomodoroCounter({ HandleSetAppStyle }) {

    const [time, useTime] = useState('25:00')
    const [styleDiv, setStyleDiv] = useState('pomodoroDiv-pomodoro-style')
    const [styleStartButtonClick, setStyleStartButtonClick] = useState([{
        style: '',
        active: false,
    }])
    const [childrenStartButtonClick, setChildrenStartButtonClick] = useState([{
        content: 'START',
        active: false,
    }])
    const [styleStartButton, setStyleStartButton] = useState('start-button-pomodoro-style')

    function HandleAddTime(time) {
        useTime(time)
    }

    function HandleSetPomodoroDivStyle(style) {
        setStyleDiv(style)
    }

    function HandleSetStartButtonStyle(style) {
        setStyleStartButton(style)
    }

    function HandleStartButtonClick() {
        const newArrayStyle = styleStartButtonClick.map((e) => {
            return !e.active ? { style: "start-button-active", active: true} : { style: '', active: false}
        })

        const newArrayChildren = childrenStartButtonClick.map((e) => {
            return !e.active ? { content: 'STOP', active: true } : { content: 'START', active: false }
        })

        setStyleStartButtonClick(newArrayStyle)
        setChildrenStartButtonClick(newArrayChildren)
    }

    return (
            <div className={`pomodoroDiv pomodoroDiv-container ${styleDiv}`}>
            <div
            >
                <Button
                children={"Pomodoro"}
                HandleAddTime={() => HandleAddTime("25:00")}
                HandleSetAppStyle={() => HandleSetAppStyle("app-pomodoro-style")}
                HandleSetPomodoroDivStyle={() => HandleSetPomodoroDivStyle("pomodoroDiv-pomodoro-style")}
                HandleSetStartButtonStyle={() => HandleSetStartButtonStyle("start-button-pomodoro-style")}
                />
                <Button
                children={"Short Break"}
                HandleAddTime={() => HandleAddTime("05:00")}
                HandleSetAppStyle={() => HandleSetAppStyle("app-short-break-style")}
                HandleSetPomodoroDivStyle={() => HandleSetPomodoroDivStyle("pomodoroDiv-short-break-style")}
                HandleSetStartButtonStyle={() => HandleSetStartButtonStyle("start-button-short-break-style")}
                />
                <Button
                children={"Long Break"}
                HandleAddTime={() => HandleAddTime("15:00")}
                HandleSetAppStyle={() => HandleSetAppStyle("app-long-break-style")}
                HandleSetPomodoroDivStyle={() => HandleSetPomodoroDivStyle("pomodoroDiv-long-break-style")}
                HandleSetStartButtonStyle={() => HandleSetStartButtonStyle("start-button-long-break-style")}
                />
            </div>
            <div>
                <Counter children={time} />
            </div>
            <div>
                <StartButton
                className={`start-button ${styleStartButton} ${styleStartButtonClick.map(e => e.style)}`}
                HandleStartButtonClick={() => HandleStartButtonClick()}
                children={childrenStartButtonClick.map(e => e.content)}
                />
            </div>
        </div>
    );
}

export default PomodoroCounter;