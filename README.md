
# CV, Countdown Timer and Thermostat React App

## Overview
This project is a React application built with Vite and React Router. It includes:  
- CV-related routes (Home, Education, Skills, Projects, Experience, Achievements).  
- A Countdown Timer (Lab 6).  
- A Thermostat (Lab 5).  

---

## Routes
- `/` → Home  
- `/education` → Education  
- `/skills` → Skills  
- `/projects` → Projects  
- `/experience` → Experience  
- `/achievements` → Achievements  
- `/timer` → Countdown Timer  
- `/thermostat` → Thermostat  

---

## Component Hierarchy

```

App
├── Navbar (Links to routes)
├── Home
├── Education
├── Skills
├── Projects
├── Experience
├── Achievements
├── Timer
│    ├── TimeSetter
│    ├── TimerDisplay
│    └── ControlButtons
└── Thermostat
├── ThermostatDisplay
└── ThermostatControls

```

---

## Props

### Timer Components
- **TimeSetter**  
  - `onSetTime(minutes, seconds)` → Function to set countdown duration.  

- **TimerDisplay**  
  - `remaining` → Time left in seconds.  

- **ControlButtons**  
  - `isRunning` → Boolean for running state.  
  - `onStart()` → Start timer.  
  - `onPause()` → Pause timer.  
  - `onReset()` → Reset timer.  

### Thermostat Components
- **ThermostatDisplay**  
  - `temperature` → Current temperature (number).  
  - `unit` → Display unit ("°C" or "°F").  

- **ThermostatControls**  
  - `onIncrease()` → Increase temperature.  
  - `onDecrease()` → Decrease temperature.  
  - `onToggleUnit()` → Switch Celsius/Fahrenheit.  
  - `isCelsius` → Boolean indicating current unit.  

---

## Features
- Timer: set custom minutes/seconds, start, pause, and reset.  
- Thermostat: adjust temperature with buttons, toggle between Celsius and Fahrenheit.  
- CV routes structured for resume-like navigation.  

