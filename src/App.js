import { useState } from "react";
import './App.css';

function App()
{
  //we use const - array destructuring - use State gives us back an array - readOnly number - a function that should change.
  const [number, setNumber] = useState(0);
  const [lotteryNumbers, setLotteryNumbers] = useState([]);

  const addLotteryNumber = () =>
  {
    setLotteryNumbers([...lotteryNumbers, number]);
  }

  return (
    <div className="app">
      <h1>Let's learn the fundamentals</h1>

      <p>Counter</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <p>{number}</p>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <br />

      <button onClick={addLotteryNumber}>Generate lottery number</button>
      {lotteryNumbers.map((lotteryNumber, i) =>
      (
        <p>The lottery number #{i + 1} is {lotteryNumber}</p>
      ))}
    </div>
  );
}

export default App;
