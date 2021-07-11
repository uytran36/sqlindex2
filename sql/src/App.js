import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const callAPI = () => {
    //get post put delete
    axios.get("http://localhost:5000/testapi").then((res) => console.log(res.data));
  };

  
  callAPI();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;