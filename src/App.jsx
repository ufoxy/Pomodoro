import React, { useState } from 'react';

import PomodoroCounter from './components/pomodoro-counter/PomodoroCounter.jsx';
// import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {

  const [style, setStyle] = useState('app-pomodoro-style')

  function HandleSetAppStyle(style) {
    let value = style
    setStyle(value)
  }

  return (
    <div className={`App ${style}`}>
      <PomodoroCounter HandleSetAppStyle={HandleSetAppStyle} />
      {
      // <Footer />
      /* commented footer to be redone */
      }
    </div>
  );
}

export default App;
