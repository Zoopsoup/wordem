import { useState, useEffect } from "react";
import SharedLetters from "./components/SharedLetters.jsx";
import HeldLetters from "./components/HeldLetters.jsx";
import Title from "./components/Title.jsx"
import Page from "./components/Page.jsx"
import CurrentWord from "./components/CurrentWord.jsx";

function App() {
  const [currentWordString, setCurrentWordString]= useState("")
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
      <Title>Wordem</Title>
      <CurrentWord>{currentWordString}</CurrentWord>
      <SharedLetters sharedLetters={[['A', 1], ['B', 2]]}></SharedLetters>
      <HeldLetters heldLetters={[['A', 1], ['B', 2], ['C', 3], ['E', 4], ['G', 5], ['H', 6], ['J', 7]]} 
      currentWordString={currentWordString} 
      setCurrentWordString={setCurrentWordString}
      />
    </Page>
  );
}

export default App;
