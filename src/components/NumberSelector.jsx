import styled from "styled-components";

const NumberSelector = ({error, selectedNumber, setSelectedNumber}) => {
  const arr = [1, 2, 3, 4, 5, 6];
  
  return (
    <NumberSelectorContainer>
      <p className="errorMsg">{selectedNumber == undefined ? error : ""}</p>
      <div className="flex">
        {arr.map((value, i) => (
          <Box
            isSelected={value == selectedNumber}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 700;
  }
  .errorMsg{
    color: red;
    font-size: 18px;
    font-weight: 400;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
  background-color: ${(propps) => (propps.isSelected ? "black" : "white")};
  color: ${(propps) => (propps.isSelected ? "white" : "black")};
`;
