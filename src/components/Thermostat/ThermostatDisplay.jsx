import React from "react";

// Displays the current temperature and unit
export default function ThermostatDisplay({ temperature, unit }) {
  return (
    <div className="thermostat-display">
      <h2>{temperature}{unit}</h2>
    </div>
  );
}
