import { useState } from "react";

export default function Accordion({ topics }) {
  const [activeIndex, setActiveIndex] = useState();
  function handleOnClick(index) {
    index === activeIndex ? setActiveIndex() : setActiveIndex(index)
  }

  return <Panel topics={topics} onClick={handleOnClick} currentIndex={activeIndex}/>
}

function Panel({ topics, onClick, currentIndex }) {
  const topicsLists = topics.map((topic, index) => (
  <div key = { index }>
    <h2 onClick={() => onClick(index)}>{topic.title}</h2>
    {currentIndex === index && <p>{topic.text}</p>}
  </div>)
  );
  return (
    <div>
      {topicsLists}
    </div>
  )
}
