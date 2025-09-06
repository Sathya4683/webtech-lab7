import React, { useState, useEffect } from "react";
import ControlButtons from "../components/Timer/ControlButtons";
import TimerDisplay from "../components/Timer/TimerDisplay";
import TimeSetter from "../components/Timer/TimeSetter";

export default function Timer() {
  const [remaining, setRemaining] = useState(0); // total time left (seconds)
  const [isRunning, setIsRunning] = useState(false);

  // Handle countdown when timer is running
  useEffect(() => {
    let interval = null;

    if (isRunning && remaining > 0) {
      interval = setInterval(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    }

    // Auto-stop if time reaches 0
    if (remaining === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, remaining]);

  // Set new time from TimeSetter
  const handleSetTime = (minutes, seconds) => {
    setRemaining(minutes * 60 + seconds);
    setIsRunning(false);
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setRemaining(0);
    setIsRunning(false);
  };

  return (
    <div className="timer-page">
      <h1>⏱ Countdown Timer</h1>
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
