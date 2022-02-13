import styled from "styled-components";
import LetterTile from "./LetterTile";


const HeldLetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const HeldLetters = ({heldLetters, currentWordString, setCurrentWordString}) => {
  console.log(heldLetters)
  heldLetters.map((letterInfo) => (console.log(letterInfo[0], letterInfo[1])))
  const heldTiles = heldLetters.map((letterInfo) => (
      <LetterTile letter={letterInfo[0]} score={letterInfo[1]}
      currentWordString={currentWordString} setCurrentWordString={setCurrentWordString} key={letterInfo[1]} />
    ))
    return(
      <HeldLetterContainer>{heldTiles}</HeldLetterContainer>
    )
}

export default HeldLetters;