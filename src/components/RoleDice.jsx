import styled from "styled-components";
import RulesComponent from "./RulesComponent";

const RoleDice = ({
  currentDice,
  roleDice,
  resetButtonClicked,
  rulesToggle,
  showRules,
  btnTxt
}) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img
          src={`./images/dice/dice_${currentDice}.png`}
          alt={`Dice ${currentDice} Image`}
        />
      </div>
      <p>Click on Dice to Roll</p>
      <button onClick={resetButtonClicked}>Reset Score</button>
      <button className="showRulesBtn" onClick={rulesToggle}>
        {btnTxt}
      </button>
      <div className="ruleClass">{showRules ? <RulesComponent /> : null}</div>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
  .showRulesBtn {
    margin-top: 30px;
    width: 200px;
    height: 40px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    background-color: black;
    color: white;
    border: 1px solid black;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background-color: white;
      border: 1px solid black;
      color: black;
      font-weight: bold;
      transition: 0.3s background ease-in;
    }
  }
  button {
    margin-top: 30px;
    width: 200px;
    height: 40px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background-color: black;
      border: 1px transparent;
      color: white;
      font-weight: bold;
      transition: 0.3s background ease-in;
    }
  }
  .ruleClass {
    margin-top: 20px;
  }
`;
