import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices 1.png" alt="dice Image" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  max-width: 1180px;
  gap: 200px;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  margin-left: 300px;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;
  font-size: 16px;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    font-weight: bold;
    transition: 0.3s background ease-in;
  }
`;
