import { useState, useEffect } from "react";
import SharedLetters from "./components/SharedLetters.jsx";
import HeldLetters from "./components/HeldLetters.jsx";
import Title from "./components/Title.jsx";
import Page from "./components/Page.jsx";
import CurrentWord from "./components/CurrentWord.jsx";
import { checkIfWordIsInList } from "./Utility/Logic.js";
import { checkIfWordHasSharedLetters } from "./Utility/Logic.js";
import { getWordScore } from "./Utility/Logic.js";
import { getRandomLetters } from "./Utility/Logic.js";
import Timer from "./components/Timer.jsx";

function App() {
  const [currentWordString, setCurrentWordString] = useState("");

  const [heldLetters, setHeldLetters] = useState(getRandomLetters(7, true));

  const [sharedLetters, setSharedLetters] = useState(
    getRandomLetters(2, false)
  );

  const [seconds, setSeconds] = useState(25);

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.keyCode == 8 && currentWordString != "") {
  //       setCurrentWordString(currentWordString.slice(0, currentWordString.length - 1))
  //       console.log("backspace pressed")
  //     } else if ((/[A-Z]/).test(e.key)) {
  //       setCurrentWordString((currentWordString) =>  currentWordString + e.key)
  //     }
  //   }

  //   document.addEventListener('keydown', handleKeyDown);

  //   // Don't forget to clean up
  //   return function cleanup() {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   }
  // }, []);

  return (
    <Page>
      <Timer seconds={seconds} setSeconds={setSeconds} />
      <Title>Wordem</Title>
      <CurrentWord>{currentWordString}</CurrentWord>
      <SharedLetters
        sharedLetters={sharedLetters}
        currentWordString={currentWordString}
        setCurrentWordString={setCurrentWordString}
      ></SharedLetters>
      <HeldLetters
        heldLetters={heldLetters}
        currentWordString={currentWordString}
        setCurrentWordString={setCurrentWordString}
      />
    </Page>
  );
}

export default App;
