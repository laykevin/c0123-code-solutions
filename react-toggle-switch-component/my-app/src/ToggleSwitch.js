import { useState } from "react";
import './ToggleSwitch.css';

export default function ToggleSwitch() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked)
  }
  const text = isClicked ? 'ON' : 'OFF';
  return (<>
    {/* <button onClick={handleClick}>Switch</button> */}
    <label className="switch">
      <input onClick={handleClick}type="checkbox" />
        <span className="slider round"></span>
    </label>
    <div>{text}</div>
  </>
  )
}
