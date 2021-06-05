import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function Button(props) {
  return (
    <button onClick={props.click}>add</button>
  )
}

function Display(props) {
  return (
    <div>{props.number}</div>
  )
}

function App() {
  const [counter, setCounter] = useState(1);
  const handleClick = () => setCounter(counter + 1);
  return (
    <div className="App">
      <Button click={handleClick}></Button>
      <Display number={counter}></Display>
    </div>
  );
}

export default App;
