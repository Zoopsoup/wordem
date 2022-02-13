import styled from "styled-components";

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 150px;
  height: 80px;
  border: 2px solid black;
  position: relative;
  &:hover {
    background-color: darkgreen;
  }
  background-color: green;
`;

const Text = styled.p`
  text-align: center;
  font-size: 34px;
  background: transparent;
  color: white;
  position: absolute;
`;

const Button = ({ text, action }) => {
  return (
    <ButtonContainer onClick={action}>
      <Text>{text}</Text>
    </ButtonContainer>
  );
};

export default Button;
