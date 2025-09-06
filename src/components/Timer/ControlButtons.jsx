import React from "react";

// Component for Start, Pause, and Reset controls
export default function ControlButtons({ isRunning, onStart, onPause, onReset }) {
  return (
    <div className="controls">
      {!isRunning ? (
        <button onClick={onStart}>▶ Start</button>
      ) : (
        <button onClick={onPause}>⏸ Pause</button>
      )}
      <button onClick={onReset}>🔄 Reset</button>
    </div>
  );
}
