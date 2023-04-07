import {
  ValueButton,
  SumButton,
  SubtractionButton,
  MultiplicationButton,
  DivisionButton,
} from './Operators';
import {
  ResultButton,
  ClearButton,
  PlusMinusButton,
  PercentageButton,
  DecimalButton,
  EmptySpace,
} from './SpecialOperators';

export const GetCalculatorButtons = () => {
  return [
    ClearButton(),
    PlusMinusButton(),
    PercentageButton(),
    DivisionButton(),
    ValueButton(7),
    ValueButton(8),
    ValueButton(9),
    MultiplicationButton(),
    ValueButton(4),
    ValueButton(5),
    ValueButton(6),
    SubtractionButton(),
    ValueButton(1),
    ValueButton(2),
    ValueButton(3),
    SumButton(),
    EmptySpace(),
    ValueButton(0),
    DecimalButton(),
    ResultButton(),
  ];
};
