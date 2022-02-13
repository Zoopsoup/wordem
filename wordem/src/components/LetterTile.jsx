import styled, {css} from "styled-components";

const LetterContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  width: 100px;
  height: 110px;
  border: 2px solid black;
  position: relative;
  ${props => props.disabled && css`
    background: #8d8d8d;
    pointer-events: none;
  `}
`;

const Letter = styled.p`
  text-align: center;
  font-size: 34px;
  background: transparent;
  color: #414040;
  position: absolute;
`;

const Score = styled.p`
  display: inline-block;
  margin: 0;
  right: 10px;
  top: 5px;
  text-align: center;
  font-size: 18px;
  background: transparent;
  color: #414040;
  position: absolute;
`;

const LetterTile = ({
  letter,
  score,
  currentWordString,
  setCurrentWordString,
  usedLetters,
  setUsedLetters,
  tileId 
}) => {
  const handleLetterClick = (letter) => {
    setCurrentWordString((currentWordString) => currentWordString + letter);
    setUsedLetters(A => [...A, tileId])
  };

  return (
    <div>
      {usedLetters && 
      <LetterContainer onClick={() => handleLetterClick(letter)} disabled={
        usedLetters && usedLetters.length ? usedLetters.includes(tileId) : false}>
        <Letter>{letter}</Letter>
        <Score>{score}</Score>
      </LetterContainer>}
    </div>
    
  );
};

export default LetterTile;
