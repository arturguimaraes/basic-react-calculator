import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import {
  clear,
  changePlusMinus,
  getResult,
  setDecimal,
  setOperator,
} from '../store/calculatorSlice';
import { ActionEnum, IButton } from '../types/types';
import { PLAYWRIGHT_SELECTORS } from '../utils/test-utils';
import classes from './CalculatorButtons.module.scss';

export const ResultButton = () => {
  const dispatch = useAppDispatch();
  const actionHandler = () => {
    dispatch(getResult());
  };
  return {
    action: () => actionHandler(),
    className: classes.operator,
    testId: `${PLAYWRIGHT_SELECTORS.operators.result}`,
    value: '=',
  } as IButton;
};

export const ClearButton = () => {
  const dispatch = useAppDispatch();
  const actionHandler = () => {
    dispatch(clear());
  };
  return {
    action: () => actionHandler(),
    className: classes.specialOperator,
    testId: `${PLAYWRIGHT_SELECTORS.clear}`,
    value: 'AC',
  } as IButton;
};

export const PlusMinusButton = () => {
  const dispatch = useAppDispatch();
  const actionHandler = () => {
    dispatch(changePlusMinus());
  };
  return {
    action: () => actionHandler(),
    className: classes.specialOperator,
    testId: `${PLAYWRIGHT_SELECTORS.plusMinus}`,
    value: '+/-',
  } as IButton;
};

export const PercentageButton = () => {
  const dispatch = useAppDispatch();
  const { operator } = useAppSelector((state) => state.calculator);
  const actionHandler = () => {
    dispatch(setOperator(ActionEnum.Percentage));
  };
  return {
    action: () => actionHandler(),
    className:
      operator === ActionEnum.Percentage
        ? classes.selectedOperator
        : classes.specialOperator,
    testId: `${PLAYWRIGHT_SELECTORS.percentage}`,
    value: '%',
  } as IButton;
};

export const DecimalButton = () => {
  const dispatch = useAppDispatch();
  const actionHandler = () => {
    dispatch(setDecimal());
  };
  return {
    action: () => actionHandler(),
    testId: `${PLAYWRIGHT_SELECTORS.decimal}`,
    value: '.',
  } as IButton;
};

export const EmptySpace = () => {
  return {
    action: () => {},
    className: classes.emptySpace,
    testId: `${PLAYWRIGHT_SELECTORS.emptySpace}`,
    value: '',
  } as IButton;
};
