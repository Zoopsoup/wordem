import { word_list } from "./Words.js";

const lettersToScores = new Map([
  ["A", 1],
  ["B", 3],
  ["C", 3],
  ["D", 2],
  ["E", 1],
  ["F", 4],
  ["G", 2],
  ["H", 4],
  ["I", 1],
  ["J", 8],
  ["K", 5],
  ["L", 1],
  ["M", 3],
  ["N", 1],
  ["O", 1],
  ["P", 3],
  ["Q", 10],
  ["R", 1],
  ["S", 1],
  ["T", 1],
  ["U", 1],
  ["V", 4],
  ["W", 4],
  ["X", 8],
  ["Y", 4],
  ["Z", 10],
]);

// checks if userWord is in Scrabble list
export let checkIfWordIsInList = (userWord) => {
  return word_list.includes(userWord.toUpperCase());
};

// checks if the userWord uses both shared letters
export let checkIfWordHasSharedLetters = (c1, c2, userWord) => {
  return userWord.includes(c1) && userWord.includes(c2);
};

export let getWordScore = (userWord) => {
  // iterates through each letter, finds the letter value, and adds it to the user score
  let wordScore = 0;
  [...userWord].forEach((c) => (wordScore += lettersToScores.get(c)));
  return wordScore;
};

// returns an array of n arrays in which the inner arrays are of the form [letter, score]
// if canRepeat == false, then all the letter/score pairs will be unique
export let getRandomLetters = (n, canRepeat) => {
  // array of just the letters that will be returned
  let letters = [];
  // array of the letter/score pairs that will be returned
  let lettersScores = [];

  for (let i = 0; i < n; i++) {
    let letter = String.fromCharCode(
      97 + Math.floor(Math.random() * 26)
    ).toUpperCase();
    // if the letter generated is already in letters and canRepeat is false, then a new letter is generated
    while (!canRepeat && letters.includes(letter)) {
      letter = String.fromCharCode(
        97 + Math.floor(Math.random() * 26)
      ).toUpperCase();
    }
    // gets the associated score of the letter
    let letterAndScore = [letter, lettersToScores.get(letter)];
    letters.push(letter);
    lettersScores.push(letterAndScore);
  }
  return lettersScores;
};

export let updateThreshold = (userScore, currentThreshold, setSeconds) => {
  if (userScore >= currentThreshold) {
    currentThreshold += 25;
    setSeconds += 20;
  }
};

export let checkIfGameOver = (seconds) => {
  if (seconds == 0) {
    return true;
  }
  return false;
};
