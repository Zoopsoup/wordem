import styled from "styled-components";
import LetterTile from "./LetterTile";

const SharedLetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const SharedLetters = ({
  sharedLetters,
  currentWordString,
  setCurrentWordString,
}) => {
  const sharedTiles = sharedLetters.map((letterInfo) => (
    <LetterTile
      letter={letterInfo[0]}
      score={letterInfo[1]}
      currentWordString={currentWordString}
      setCurrentWordString={setCurrentWordString}
      key={letterInfo[1]}
    />
  ));
  return <SharedLetterContainer>{sharedTiles}</SharedLetterContainer>;
};

export default SharedLetters;
