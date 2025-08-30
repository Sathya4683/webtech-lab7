import React, { useState, useEffect } from "react";
import TimeSetter from "./components/TimeSetter";
import TimerDisplay from "./components/TimerDisplay";
import ControlButtons from "./components/ControlButtons";

export default function App() {
  const [time, setTime] = useState(0);       // total time in seconds
  const [remaining, setRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Effect to handle countdown
  useEffect(() => {
    let interval = null;
    if (isRunning && remaining > 0) {
      interval = setInterval(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    } else if (remaining === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, remaining]);

  // Handlers
  const handleSetTime = (minutes, seconds) => {
    const totalSeconds = minutes * 60 + seconds;
    setTime(totalSeconds);
    setRemaining(totalSeconds);
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setRemaining(time);
  };

  return (
    <div className="app">
      <h1>⏳ Countdown Timer</h1>
      <TimeSetter onSetTime={handleSetTime} />
      <TimerDisplay remaining={remaining} />
      <ControlButtons
        isRunning={isRunning}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
      />
    </div>
  );
}
