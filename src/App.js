 import React, {useState} from 'react'
import './App.css';

function App() {
  const [state , setState] = useState(0)

  function inc(){
    setState(state+1)
  }

  function dec(){
    setState(state-1)
  }

  function reset(){
    setState(0)
  }

  return (
    <div className="App">
      <h1 style={{color:'red', fontSize:'50px'}}>{state}</h1>
      <button onClick={inc} style={{fonSize:'25px' , margin:'0 15px'}}>+</button>
      <button onClick={dec} style={{fonSize:'25px' , margin:'0 15px'}}>-</button>
      <button onClick={reset} style={{fonSize:'25px' , margin:'0 15px'}}>reset</button>
    </div>
  );
}

export default App;
