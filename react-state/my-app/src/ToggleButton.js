import { useState } from "react";

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('Value returned by useState:', isClicked);
  function handleClick() {
    console.log('before setter:', isClicked);
    setIsClicked(!isClicked);
    console.log('After setter:', isClicked);
  }
  return <button onClick={handleClick} style={{ backgroundColor: isClicked ? color : 'white' }}>{text}</button>
}
