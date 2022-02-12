import logo from "./logo.svg";
import "./App.css";
import { checkIfWordIsInList } from "./Utility/Logic.js";
import { checkIfWordHasSharedLetters } from "./Utility/Logic.js";
import { getWordScore } from "./Utility/Logic.js";
import { getRandomLetters } from "./Utility/Logic.js";

function App() {
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
      {console.log(getRandomLetters(25, false))};
    </div>
  );
}

export default App;
