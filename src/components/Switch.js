import React, { useState } from "react";
import "./Switch.css";

function Switch({ toggleTheme, isdarktheme }) {
  const [isToggled, setIsToggled] = useState(isdarktheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default Switch;