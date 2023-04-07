import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { setInput, setOperator } from '../store/calculatorSlice';
import { ActionEnum } from '../types/types';
import { IButton } from '../types/types';
import { PLAYWRIGHT_SELECTORS } from '../utils/test-utils';
import classes from './CalculatorButtons.module.scss';

export const ValueButton = (value: string | number) => {
  const dispatch = useAppDispatch();
  const actionHandler = () => {
    dispatch(setInput(value.toString()));
  };
  return {
    action: () => actionHandler(),
    testId: `${PLAYWRIGHT_SELECTORS.input}${value}`,
    value: value,
  } as IButton;
};

export const SumButton = () => {
  const dispatch = useAppDispatch();
  const { operator } = useAppSelector((state) => state.calculator);
  const actionHandler = () => {
    dispatch(setOperator(ActionEnum.Sum));
  };
  return {
    action: () => actionHandler(),
    className:
      operator === ActionEnum.Sum ? classes.selectedOperator : classes.operator,
    testId: `${PLAYWRIGHT_SELECTORS.operators.sum}`,
    value: '+',
  } as IButton;
};

export const SubtractionButton = () => {
  const dispatch = useAppDispatch();
  const { operator } = useAppSelector((state) => state.calculator);
  const actionHandler = () => {
    dispatch(setOperator(ActionEnum.Subtraction));
  };
  return {
    action: () => actionHandler(),
    className:
      operator === ActionEnum.Subtraction
        ? classes.selectedOperator
        : classes.operator,
    testId: `${PLAYWRIGHT_SELECTORS.operators.subtraction}`,
    value: '-',
  } as IButton;
};

export const MultiplicationButton = () => {
  const dispatch = useAppDispatch();
  const { operator } = useAppSelector((state) => state.calculator);
  const actionHandler = () => {
    dispatch(setOperator(ActionEnum.Multiplication));
  };
  return {
    action: () => actionHandler(),

    className:
      operator === ActionEnum.Multiplication
        ? classes.selectedOperator
        : classes.operator,
    testId: `${PLAYWRIGHT_SELECTORS.operators.multiplication}`,
    value: '*',
  } as IButton;
};

export const DivisionButton = () => {
  const dispatch = useAppDispatch();
  const { operator } = useAppSelector((state) => state.calculator);
  const actionHandler = () => {
    dispatch(setOperator(ActionEnum.Division));
  };
  return {
    action: () => actionHandler(),
    className:
      operator === ActionEnum.Division
        ? classes.selectedOperator
        : classes.operator,
    testId: `${PLAYWRIGHT_SELECTORS.operators.division}`,
    value: '/',
  } as IButton;
};
