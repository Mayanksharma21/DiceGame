import React from "react";
import { styled } from "styled-components";

const RulesComponent = () => {
  return (
    <RuleContainer>
      <h2>How to Play Dice Game</h2>
      <div className="text">
        <p>@ Select any number</p>
        <p>@ Click on dice image</p>
        <p>
          @ After clicked on dice if selected number is equal to dice number you
          will get same points as dice
        </p>
        <p>@ If you get wrong then 2 points will be deducted</p>
      </div>
    </RuleContainer>
  );
};

export default RulesComponent;

const RuleContainer = styled.div`
  max-width: 800px;
  max-height: 180px;
  margin: 0 auto;
  margin-top: 40px;
  background-color: #FBF1F1;
  padding: 20px;
  border-radius: 6px;
  h2{
    font-size: 24px;
  }
  .text{
    margin-top: 24px;
  }
  .text p{
    font-size: 15px;
  }
`;
