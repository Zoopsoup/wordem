import styled from "styled-components";
import LetterTile from "./LetterTile";


const SharedLetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const SharedLetters = ({sharedLetters}) => {
  const sharedTiles = sharedLetters.map((letterInfo) => (
      <LetterTile letter={letterInfo[0]} score={letterInfo[1]} key={letterInfo[1]}/>
    ))
    return(
      <SharedLetterContainer>{sharedTiles}</SharedLetterContainer>
    )
}

export default SharedLetters;