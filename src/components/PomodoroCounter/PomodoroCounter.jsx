import React from 'react';

import Counter from '../Counter/Counter.jsx';
import Button from '../Button/Button.jsx';
import './PomodoroCounter.css';

function PomodoroCounter() {
    return (
            <div className="pomodoro-counter pomodoro-counter-container">
                <div>
                    <Button 
                    className={"button"}
                    children={"Pomodoro"} />
                    <Button 
                    className={"button"}
                    children={"Short Break"} />
                    <Button 
                    className={"button"}
                    children={"Long Break"} />
                </div>
                <div>
                    <Counter children={"25:00"} />
                </div>
                <div>
                    <Button
                    className={"button-start"} 
                    children={"START"} />
                </div>
            </div>
    );
}

export default PomodoroCounter;