import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  border-radius: 3px;
  width: 100px;
  height: 210px;
  border: 2px solid black;
  position: relative;
  
`

const Game = ({letter, score}) => {
  return (
    <LetterContainer>
      <Letter>{letter}</Letter>
      <Score>{score}</Score>
    </LetterContainer>
  )
}

export default LetterTile;