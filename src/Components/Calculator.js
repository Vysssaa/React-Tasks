import React, { useState } from 'react';
import styled from 'styled-components'

const CalculatorContainer = styled.div`
  background: linear-gradient(to right, #0074E4, #00D25B);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalculatorWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <CalculatorContainer>
      <CalculatorWrapper>
        <input type="text" value={input} readOnly />
        <div>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
      </CalculatorWrapper>
    </CalculatorContainer>
  );
};

export default Calculator;
