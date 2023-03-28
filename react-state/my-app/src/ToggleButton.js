import { useState } from "react";

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('Value returned by useState:', isClicked);
  function handleClick() {
    console.log('before setter:', isClicked);
    setIsClicked(!isClicked);
    console.log('After setter:', isClicked);
  }
  if (!isClicked) {
    return <button onClick={handleClick} style={{ backgroundColor: 'white' }}>{text}</button>
  }
  return <button onClick={handleClick} style={{ backgroundColor: color}}>{text}</button>
}
