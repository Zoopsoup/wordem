import styled from "styled-components";

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
}) => {
  const handleLetterClick = (letter) => {
    console.log(letter);
    setCurrentWordString((currentWordString) => currentWordString + letter);
  };

  return (
    <LetterContainer onClick={() => handleLetterClick(letter)}>
      <Letter>{letter}</Letter>
      <Score>{score}</Score>
    </LetterContainer>
  );
};

export default LetterTile;
