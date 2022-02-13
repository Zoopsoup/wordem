import styled from "styled-components";

const ScoreContainer = styled.div`
  border-radius: 3px;
  width: 100px;
  height: 50px;
  border: 2px solid black;
  position: relative;
  
`

const GameScore = ({score}) => {
  return (
    <ScoreContainer>
      <Letter>{letter}</Letter>
      <Score>{score}</Score>
    </ScoreContainer>
  )
}

export default LetterTile;