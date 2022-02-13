import styled from "styled-components";
import LetterTile from "./LetterTile";

const HeldLetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const HeldLetters = ({
  heldLetters,
  currentWordString,
  setCurrentWordString,
  usedLetters,
  setUsedLetters
}) => {
  const heldTiles = heldLetters.map((letterInfo, index) => (
    <LetterTile
      letter={letterInfo[0]}
      score={letterInfo[1]}
      currentWordString={currentWordString}
      setCurrentWordString={setCurrentWordString}
      usedLetters={usedLetters}
      setUsedLetters={setUsedLetters}
      tileId={index + 2}
      key={index}
    />
  ));
  return <HeldLetterContainer>{heldTiles}</HeldLetterContainer>;
};

export default HeldLetters;
