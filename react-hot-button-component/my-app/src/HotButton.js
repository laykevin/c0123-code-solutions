import { useState } from "react";

export default function HotButton({ color }) {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  const textColor = count < 12 ? "white" : "black";
  let bkgColor = "black"
  if (count > 2 && count < 6) {
    bkgColor = "rgb(53,28,117)"
  } else if (count > 5 && count < 9) {
    bkgColor = "rgb(103,78,167)"
  } else if (count > 8 && count < 12) {
    bkgColor = "rgb(224,102,102)"
  } else if (count > 11 && count < 15) {
    bkgColor = "rgb(246,178,107)"
  } else if (count > 14 && count < 18) {
    bkgColor = "rgb(255,255,0)"
  } else if (count > 17) {
    bkgColor = "white"
  }

  return <button onClick={handleClick} style={{ backgroundColor: bkgColor, color: textColor}}>Hot Button</button>
}
