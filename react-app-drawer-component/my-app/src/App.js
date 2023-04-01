// import logo from './logo.svg';
import './App.css';
import AppDrawer from './AppDrawer';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const listItems = ['About', 'Get Started', 'Sign In']

function App() {
  const [isClosed, setIsClosed] = useState(true);
  const [currText, setCurrText] = useState('')
  function handleClick() {
    setIsClosed(!isClosed);
  }

  function handleItem(text) {
    handleClick();
    setCurrText(text);
  }

  return (
    <>
    <div className='App'>
      {!isClosed ?
      <>
        <div className="overlay" onClick={handleClick}></div>
        <AppDrawer heading="Menu" items={listItems} onClick={handleItem}/>
      </>
      :
      <>
        <FiMenu style={{ fontSize: '2.5rem', display: isClosed ? 'block' : 'none' }} onClick={handleClick} />
      </>}
    </div>
    <h1 className="text">{currText}</h1>
    </>
  );
}

export default App;
