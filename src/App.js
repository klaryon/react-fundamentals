import { useState, useEffect, useMemo } from "react";
import './App.css';

function App()
{
  //We use const - array destructuring - use State gives us back an array - readOnly number - a function that should change.
  const [number, setNumber] = useState(0);
  const [lotteryNumbers, setLotteryNumbers] = useState([]);

  //Keeps track - optimization
  const expensiveCalculationForLotteryGoldNumber = useMemo(() =>
  {
    //HUGE expensive calculation
    return 50;
  }, [lotteryNumbers]);

  const addLotteryNumber = () =>
  {
    setLotteryNumbers([...lotteryNumbers, number]);
  };

  useEffect(() =>
  {
    console.log("The page mounted");
  }, [lotteryNumbers])


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
        <p key={i}>The lottery number #{i + 1} is {lotteryNumber}</p>
      ))}
    </div>
  );
}

export default App;
