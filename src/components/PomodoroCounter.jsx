import React, { useState, useEffect } from 'react';
import percentDiff from 'percentage-difference';
import Counter from './Counter.jsx';
import SimpleButton from './SimpleButton.jsx';
import StartButton from './StartButton.jsx';
import Progress from './ProgressBar.jsx'
import './PomodoroCounter.css';

function PomodoroCounter({ HandleSetAppStyle }) {

    let [minutes, setMinutes] = useState('25');
    let [seconds, setSeconds] = useState('00');
    let [initialValue, setInitialValue] = useState(25)
    const [progressPercentage, setProgressPercentage] = useState()
    const [counterInterval, setCounterInterval] = useState();
    const [time, setTime] = useState('00:00');
    const [stylePomodoroCounter, setStylePomodoroCounter] = useState('pomodoro-counter-style');
    const [startOrStop, setStartOrStop] = useState(false);
    const [startButton, setStartButton] = useState([{
        content: 'START',
        style: '',
        active: false,
    }])
    const [styleStartButton, setStyleStartButton] = useState('start-button-pomodoro-style');
    const [styleButton, setStyleButton] = useState([{
        pomodoro: 'button-active',
        shortBreak: '',
        longBreak: '',
    }])
    const [styleProgress, setStyleProgress] = useState('progress-pomodoro-style')

    useEffect(() => {

        function percentageCalculator() {
            const value = parseFloat(`${minutes}.${seconds}`)
            const percentage = percentDiff(initialValue, value) * -1
            console.log(percentage)
            setProgressPercentage(percentage)
        }

        if(!parseInt(seconds) && !parseInt(minutes)) {
            
            setCounterInterval(clearInterval(counterInterval));
            setStartButton([{ content: 'START', style: '', active: false }]);
            setStartOrStop(false);
            setProgressPercentage(100)
            setTime('00:00');
            setMinutes('00');
            setSeconds('00');

        } else {
            setTime(`${minutes}:${seconds}`)
            percentageCalculator()
        }
    }, [minutes, seconds, counterInterval, initialValue]);

    function HandleSetActiveButtonStyle(button) {

        const active = 'button-active'
        let newArray = 0

        if(button === 'pomodoro') {
            newArray = [{pomodoro: active, shortBreak: '', longBreak: ''}]
        } else if (button === 'short-break') {
            newArray = [{pomodoro: '', shortBreak: active, longBreak: ''}]
        } else if (button === 'long-break') {
            newArray = [{pomodoro: '', shortBreak: '', longBreak: active}]
        }
        setStyleButton(newArray)
    }

    function HandleSetProgressStyle(button) {

        let newStyle = 0

        if(button === 'pomodoro') {
            newStyle = 'progress-pomodoro-style'
        } else if (button === 'short-break') {
            newStyle = 'progress-short-break-style'
        } else if (button === 'long-break') {
            newStyle = 'progress-long-break-style'
        }
        setStyleProgress(newStyle)
    }

    function HandleAddTime(minutes, seconds) {
        destroyInterval();
        setStartOrStop(false);
        setInitialValue(parseInt(minutes))
        setMinutes(minutes);
        setSeconds(seconds);
        disableStartButton();
    };

    function HandleSetPomodoroDivStyle(style) {
        setStylePomodoroCounter(style);
    };

    function HandleSetStartButtonStyle(style) {
        setStyleStartButton(style);
    };

    function disableStartButton() {

        const newArray = startButton.map((e) => {
            if (e.active) return { content: 'START', style: '', active: false }
            return e;
        });

        setStartButton(newArray);
    };

    function HandleStartButtonClick() {
        const newArray = startButton.map((e) => {
            return !e.active ? { content: 'STOP', active: true, style: "start-button-active" } : { content: 'START', active: false, style: '' };
        });

        setStartButton(newArray);
    };

    function HandleStartOrStop() {
        if (!startOrStop) {
            setStartOrStop(true);
            startCounter();
        } else {
            setStartOrStop(false);
            pauseCounter();
        };
    };

    function updateCounter(){
        setMinutes(parseInt(minutes) < 10 ? `0${parseInt(minutes)}` : minutes)
        setSeconds(parseInt(seconds) < 10 ? `0${parseInt(seconds)}` : seconds)
      }
  
    function startCounter() {

        if (counterInterval) return;
        if (!parseInt(seconds) && !parseInt(minutes)) return;
      
        setCounterInterval(setInterval(() => { 
      
          const secondsOver = !parseInt(seconds);

          if (secondsOver) {
            setSeconds(parseInt(seconds = 59));
            setMinutes(parseInt(--minutes));
            updateCounter();
            return;
          };
      
          setSeconds(parseInt(--seconds));
          updateCounter();
      
        }, 1000));

      };

    function pauseCounter() {
        destroyInterval();
    };

    function destroyInterval() {
        setCounterInterval(clearInterval(counterInterval));
        setCounterInterval(undefined);
    };

    // function resetCounter(){
    //     destroyInterval();
    //     setMinutes('25');
    //     setSeconds('00');
    //     updateCounter();
    //   }

    return (
            <div className={`pomodoro-counter pomodoro-counter-container ${stylePomodoroCounter}`}>
            <div>
                <SimpleButton
                children={"Pomodoro"}
                active={styleButton.map(e => e.pomodoro)}
                HandleAddTime={() => HandleAddTime('25', '00')}
                HandleSetAppStyle={() => HandleSetAppStyle("app-pomodoro-style")}
                HandleSetPomodoroDivStyle={() => HandleSetPomodoroDivStyle("pomodoro-counter-style")}
                HandleSetStartButtonStyle={() => HandleSetStartButtonStyle("start-button-pomodoro-style")}
                HandleSetActiveButtonStyle={() => HandleSetActiveButtonStyle('pomodoro')}
                HandleSetProgressStyle={() => HandleSetProgressStyle('pomodoro')}
                />
                <SimpleButton
                children={"Short Break"}
                active={styleButton.map(e => e.shortBreak)}
                HandleAddTime={() => HandleAddTime('05', '00')}
                HandleSetAppStyle={() => HandleSetAppStyle("app-short-break-style")}
                HandleSetPomodoroDivStyle={() => HandleSetPomodoroDivStyle("pomodoro-short-break-style")}
                HandleSetStartButtonStyle={() => HandleSetStartButtonStyle("start-button-short-break-style")}
                HandleSetActiveButtonStyle={() => HandleSetActiveButtonStyle('short-break')}
                HandleSetProgressStyle={() => HandleSetProgressStyle('short-break')}
                />
                <SimpleButton
                children={"Long Break"}
                active={styleButton.map(e => e.longBreak)}
                HandleAddTime={() => HandleAddTime('15', '00')}
                HandleSetAppStyle={() => HandleSetAppStyle("app-long-break-style")}
                HandleSetPomodoroDivStyle={() => HandleSetPomodoroDivStyle("pomodoro-long-break-style")}
                HandleSetStartButtonStyle={() => HandleSetStartButtonStyle("start-button-long-break-style")}
                HandleSetActiveButtonStyle={() => HandleSetActiveButtonStyle('long-break')}
                HandleSetProgressStyle={() => HandleSetProgressStyle('long-break')}
                />
            </div>
                <div>
                    <Counter time={time} />
                </div>
            <div>
                <StartButton
                className={`${styleStartButton} ${startButton.map(e => e.style)}`}
                children={startButton.map(e => e.content)}
                HandleStartButtonClick={() => HandleStartButtonClick()}
                HandleStartOrStop={() => HandleStartOrStop()}
                />
            </div>
                <div>
                <Progress 
                className={styleProgress} 
                done={progressPercentage} 
                />
                </div>
        </div>
    );
}

export default PomodoroCounter;