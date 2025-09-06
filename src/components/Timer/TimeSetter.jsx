import React, { useState } from "react";

// Component for setting timer minutes and seconds
export default function TimeSetter({ onSetTime }) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Handle form submit and send time to parent
  const handleSubmit = (e) => {
    e.preventDefault();
    onSetTime(Number(minutes), Number(seconds));
  };

  return (
    <form onSubmit={handleSubmit} className="time-setter">
      <input
        type="number"
        min="0"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        placeholder="Minutes"
      />
      <input
        type="number"
        min="0"
        max="59"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        placeholder="Seconds"
      />
      <button type="submit">Set Time</button>
    </form>
  );
}
