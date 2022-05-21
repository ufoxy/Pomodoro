import React, { useState } from 'react';

import PomodoroCounter from './components/pomodoro-counter/PomodoroCounter.jsx';
import './App.css';

function App() {

  const [time, useTime] = useState('25:00')

  function HandleAddTime(time) {
      useTime(time)
  }

  const [style, setStyle] = useState('pomodoro-style')

  function HandleSetAppStyle(style) {
    let value = style
    setStyle(value)
  }

  return (
    <div className={style}>
      <PomodoroCounter
      HandleAddTime={HandleAddTime}
      HandleSetAppStyle={HandleSetAppStyle}
      time={time}
      />
    </div>

  );
}

export default App;
