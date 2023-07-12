import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import RulesComponent from "./RulesComponent";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [btnTxt, setBtnTxt] = useState("Show Rules");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetButtonClicked = () => {
    setScore(0);
  };

  const rulesToggle = () => {
    setShowRules((prev) => !prev);
    showRules ? setBtnTxt("Show Rules") : setBtnTxt("Hide Rules");
  };

  const roleDice = () => {
    if (selectedNumber == undefined) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (randomNumber == selectedNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <MainComponent>
      <div className="top_section">
        <TotalScore score={score} setScore={setScore} />
        <NumberSelector
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        roleDice={roleDice}
        resetButtonClicked={resetButtonClicked}
        rulesToggle={rulesToggle}
        showRules={showRules}
        btnTxt={btnTxt}
      />
    </MainComponent>
  );
};

export default GamePlay;

const MainComponent = styled.main`
  padding-top: 20px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
