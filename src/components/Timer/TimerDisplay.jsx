import React from "react";

// Component to display remaining countdown time
export default function TimerDisplay({ remaining }) {
  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
  const seconds = String(remaining % 60).padStart(2, "0");

  return (
    <div className="timer-display">
      <h2>
        {minutes}:{seconds}
      </h2>
    </div>
  );
}
