import { useState } from "react";
import "./Toggle.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };

  return (
    <div className="toggle-switch" onClick={handleToggle} style={toggleBGColor}>
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span className="switch-state">{checkIsOn}</span>
      </div>
    </div>
  );
};
