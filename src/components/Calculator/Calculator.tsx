import React from 'react';
import ButtonsContainer from '../../components/Buttons/ButtonsContainer';
import Screen from '../../components/Screen/Screen';
import { GetCalculatorButtons } from '../../buttons/CalculatorButtons';

const Calculator = () => {
  const calculatorButtons = GetCalculatorButtons();
  return (
    <React.Fragment>
      <Screen />
      <ButtonsContainer buttons={calculatorButtons} />
    </React.Fragment>
  );
};

export default Calculator;
