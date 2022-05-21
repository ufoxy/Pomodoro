import React from 'react';

import Button from '../button/Button.jsx';
import Counter from '../counter/Counter.jsx';
import StartButton from '../start-button/StartButton.jsx';
import './PomodoroCounter.css';

function PomodoroCounter({ HandleAddTime, time }) {

    // handleStyleClick

    // const pomodoroStyles = {
    //     backgroundColor: '#D95550',
    // }

    // const shortBreakStyles = {

    // }

    // const longBreakStyles = {

    // }

    return (
            <div className="pomodoro-counter pomodoro-counter-container">
            <div
            // onClick={handleStyleClick}
            >
                <Button
                children={"Pomodoro"}
                HandleAddTime={HandleAddTime}
                // style={
                time={"25:00"}
                />
                <Button
                children={"Short Break"}
                HandleAddTime={HandleAddTime}
                time={"05:00"}
                />
                <Button
                children={"Long Break"}
                HandleAddTime={HandleAddTime}
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