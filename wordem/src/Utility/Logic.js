import { word_list } from "./Words.js";

const lettersToScores = new Map([
  ["a", 1],
  ["b", 3],
  ["c", 3],
  ["d", 2],
  ["e", 1],
  ["f", 4],
  ["g", 2],
  ["h", 4],
  ["i", 1],
  ["j", 8],
  ["k", 5],
  ["l", 1],
  ["m", 3],
  ["n", 1],
  ["o", 1],
  ["p", 3],
  ["q", 10],
  ["r", 1],
  ["s", 1],
  ["t", 1],
  ["u", 1],
  ["v", 4],
  ["w", 4],
  ["x", 8],
  ["y", 4],
  ["z", 10],
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
    let letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    // if the letter generated is already in letters and canRepeat is false, then a new letter is generated
    while (!canRepeat && letters.includes(letter)) {
      letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    // gets the associated score of the letter
    let letterAndScore = [letter, lettersToScores.get(letter)];
    letters.push(letter);
    lettersScores.push(letterAndScore);
  }
  return lettersScores;
};
