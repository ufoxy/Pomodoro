import React from 'react';

import Counter from '../Counter/Counter.jsx';
import Button from '../Button/Button.jsx';
import '../Button/Button.css';
import './PomodoroCounter.css';

function PomodoroCounter() {
    return (
            <div className="pomodoro-counter pomodoro-counter-container">
                <div>
                    <Button children={"Pomodoro"} />
                    <Button children={"Short Break"} />
                    <Button children={"Long Break"} />
                </div>
                <div>
                    <Counter children={"25:00"} />
                </div>
                <div>
                    <Button className={"button-start"} children={"START"} />
                </div>
            </div>
    );
}

export default PomodoroCounter;