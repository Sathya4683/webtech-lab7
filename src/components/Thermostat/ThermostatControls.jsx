import React from "react";

// Provides buttons to increase/decrease and toggle units
export default function ThermostatControls({ onIncrease, onDecrease, onToggleUnit, isCelsius }) {
  return (
    <div className="thermostat-controls">
      <button onClick={onDecrease}>-</button>
      <button onClick={onIncrease}>+</button>
      <button onClick={onToggleUnit}>
        Switch to {isCelsius ? "°F" : "°C"}
      </button>
    </div>
  );
}
