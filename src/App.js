// import { useState } from "react";
import './App.css';

function App()
{
  //we use const - array destructuring - use State gives us back an array - readOnly number - a function that should change.
  // const [number, setNumber] = useState(0);

  return (
    <div className="app">
      <h1>Lets learn the fundamentals</h1>

      <p>Counter</p>
      <button>+</button>
      <p>0</p>
      <button>-</button>
    </div>
  );
}

export default App;
