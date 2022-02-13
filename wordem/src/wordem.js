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
import Button from "./components/Button.jsx";

function App() {
  const [currentWordString, setCurrentWordString] = useState("");
  const [heldLetters, setHeldLetters] = useState(getRandomLetters(7, true));
  const [sharedLetters, setSharedLetters] = useState(getRandomLetters(2, false));
  const [seconds, setSeconds] = useState(25);
  // Array of bools mapping to letter tiles based on index: 0-1 -> shared letters, 2-8 -> held letters
  const [usedLetters, setUsedLetters] = useState([]);

  useEffect(() => {
    function handleKeyDown(e) {
      console.log("pressed")
      let copiedLetterState = [...usedLetters]
      console.log(copiedLetterState)
      console.log(usedLetters)
      if (e.keyCode == 8) {
        setCurrentWordString(s => s.slice(0, - 1))
        let copiedLetterState = [...usedLetters]
        console.log(copiedLetterState)
        copiedLetterState.pop()
        setUsedLetters(copiedLetterState)
      } else if (e.keyCode >= 65 && e.keyCode <= 90){
        setCurrentWordString(s => s + e.key.toUpperCase())
      }
    }
  let submitAction = () => {
    console.log("Button Clicked!");
    if (checkIfWordHasSharedLetters && checkIfWordIsInList) {
      setHeldLetters(getRandomLetters(7, false, false));
    }
  };

    document.addEventListener('keydown', handleKeyDown);
    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);
  
  return (
    <Page>
      <Timer seconds={seconds} setSeconds={setSeconds} />
      <Title>Wordem</Title>
      <CurrentWord>{currentWordString}</CurrentWord>
      <SharedLetters
        sharedLetters={sharedLetters}
        currentWordString={currentWordString}
        setCurrentWordString={setCurrentWordString}
        usedLetters={usedLetters}
        setUsedLetters={setUsedLetters}
      ></SharedLetters>
      <HeldLetters
        heldLetters={heldLetters}
        currentWordString={currentWordString}
        setCurrentWordString={setCurrentWordString}
        usedLetters={usedLetters}
        setUsedLetters={setUsedLetters}
      />
      <Button text={"Submit"} action={submitAction}></Button>
    </Page>
  );
}

export default App;
