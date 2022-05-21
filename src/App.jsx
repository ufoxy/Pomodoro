import React, { useState } from 'react';

import PomodoroCounter from './components/pomodoro-counter/PomodoroCounter.jsx';
import './App.css';

function App() {

  const [time, useTime] = useState('25:00')

  function HandleAddTime(time) {
      useTime(time)
  }

  return (
    <div className="containerx">
      <PomodoroCounter
      HandleAddTime={HandleAddTime}
      time={time}
      />
    </div>
  );
}

export default App;
