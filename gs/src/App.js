import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function Button(){
  const [counter,setCounter]=useState(0);
  const handleClick=()=>setCounter(counter+1);
  return(
    <button onClick={handleClick}>{counter}</button>
  )
}

function App() {
  return (
    <div className="App">
      <Button></Button>
    </div>
  );
}

export default App;
