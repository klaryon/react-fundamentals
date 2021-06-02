import {useRef} from "react";
import './App.css';

function App()
{
  const firstNameRef = useRef(null);

  const onSubmit = (e) =>
  {
    e.preventDefault();

    firstNameRef.current.value;
  }

  return (
    <div className="app">
      <h1>Sign up</h1>
      <h2>Please fill out the following:</h2>

      <form>
        <input ref={firstNameRef} placeholder="First Name" type="text" /><br />
        <input ref={firstNameRef} placeholder="Last Name" type="text" /> <br />
        <input placeholder="Email" type="email" /> <br />
        <input placeholder="Password" type="password" /> <br />
        <button onClick={onSubmit} type="submit">Submit</button>
      </form>
    </div>

  );
}

export default App;
