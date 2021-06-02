import {useState} from "react";
import './App.css';

function App()
{
  const [firstName, setFirstName] = useState("");

  const onSubmit = (e) =>
  {
    e.preventDefault();
  }

  return (
    <div className="app">
      <h1>Contact Me</h1>
      <h2>Please fill out the following</h2>

      <form>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          type="text" />{" "}
        <br />
        <input placeholder="Last Name" type="text" /> <br />
        <input placeholder="Email" type="email" /> <br />
        <input placeholder="Password" type="password" /> <br />
        <button onClick={onSubmit} type="submit">Submit</button>
      </form>
    </div>

  );
}

export default App;
