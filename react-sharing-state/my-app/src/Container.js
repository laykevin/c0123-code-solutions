import React, { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work correctly!
 */
export default function Container({ items }) {
  const [current, setCurrent] = useState(0);
  function handleClickPrev() {
    setCurrent(((current - 1) + items.length) % items.length)
  }
  function handleClickNext() {
    setCurrent((current + 1) % items.length)
  }
  function handleClick(index) {
    setCurrent(index)
  }
  return (
    <div>
      <div>{items[current]}</div>
      <div>
        <Button text="Prev" onClick={handleClickPrev}/>
        <Buttons count={items.length} current={current} onClick={handleClick}/>
        <Button text="Next" onClick={handleClickNext}/>
      </div>
    </div>
  );
}

/**
 * A button that toggles its color between white and lightblue.
 * TODO: Remove the toggle behavior and make the background color a prop, default white.
 * TODO: When clicked, change the current item in the Container.
 */
function Button({ text, onClick, backgroundColor }) {

  // function toggleBackground() {

  // }
  return <button onClick={onClick} style={{ backgroundColor }}>{text}</button>;
}

/**
 * An array of buttons.
 * TODO: Highlight only the active button lightblue.
 */
function Buttons({ count, current, onClick }) {


  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <Button
        key={i}
        text={i}
        onClick={() => onClick(i)}
        backgroundColor={i === current ? 'lightblue' : undefined} />)
  }
  return <div>{buttons}</div>;
}
