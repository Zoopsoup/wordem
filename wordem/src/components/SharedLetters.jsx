import styled from "styled-components";
import LetterTile from "./LetterTile";

const SharedLetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  border-radius: 3px;
  width: 210px;
  height: 110px;
  border: 2px solid black;
  padding: 4px;
  margin-bottom: 20px;
`;

const SharedLetters = ({
  sharedLetters,
  currentWordString,
  setCurrentWordString,
  usedLetters,
  setUsedLetters
}) => {
  const sharedTiles = sharedLetters.map((letterInfo, index) => (
    <LetterTile
      letter={letterInfo[0]}
      score={letterInfo[1]}
      currentWordString={currentWordString}
      setCurrentWordString={setCurrentWordString}
      usedLetters={usedLetters}
      setUsedLetters={setUsedLetters}
      tileId={index}
      key={index}
    />
  ));
  return <SharedLetterContainer>{sharedTiles}</SharedLetterContainer>;
};

export default SharedLetters;
