import React, { useState } from "react";
import ThermostatDisplay from "../components/Thermostat/ThermostatDisplay";
import ThermostatControls from "../components/Thermostat/ThermostatControls";

export default function Thermostat() {
  const [temperature, setTemperature] = useState(22); // Default in Celsius
  const [isCelsius, setIsCelsius] = useState(true); // Track unit system

  // Increase temperature
  const handleIncrease = () => setTemperature((prev) => prev + 1);

  // Decrease temperature
  const handleDecrease = () => setTemperature((prev) => prev - 1);

  // Toggle unit (Celsius <-> Fahrenheit)
  const toggleUnit = () => setIsCelsius((prev) => !prev);

  // Convert Celsius <-> Fahrenheit dynamically
  const displayTemp = isCelsius
    ? temperature
    : Math.round((temperature * 9) / 5 + 32);

  return (
    <div className="thermostat">
      <h1>Thermostat</h1>
      <ThermostatDisplay 
        temperature={displayTemp} 
        unit={isCelsius ? "°C" : "°F"} 
      />
      <ThermostatControls 
        onIncrease={handleIncrease} 
        onDecrease={handleDecrease} 
        onToggleUnit={toggleUnit} 
        isCelsius={isCelsius}
      />
    </div>
  );
}
