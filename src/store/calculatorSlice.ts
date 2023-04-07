import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { ActionEnum } from '../types/types';

interface CalculatorState {
  operator: ActionEnum | null;
  total: number;
  input: string;
}

const initialState: CalculatorState = {
  operator: null,
  total: 0,
  input: '0',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    clear: (state) => {
      state.operator = null;
      state.total = 0;
      state.input = '0';
    },
    changePlusMinus: (state) => {
      if (state.input !== '0') {
        state.input = `${parseFloat(state.input) * -1}`;
      }
    },
    getResult: (state) => {
      if (state.total === 0 && state.input === '0') {
        return;
      }
      if (state.operator !== null) {
        state.total = getUpdatedTotal(state);
        state.operator = null;
        state.input = '0';
      }
    },
    setDecimal: (state) => {
      if (state.operator === null) {
        state.total = 0;
      }
      if (state.input.indexOf('.') === -1) {
        state.input += '.';
      }
    },
    setInput: (state, action: PayloadAction<string>) => {
      if (state.operator === null) {
        state.total = 0;
      }
      if (state.input === '0') {
        state.input = action.payload;
      } else {
        if (state.input.length < 25) {
          state.input += action.payload;
        }
      }
    },
    setOperator: (state, action: PayloadAction<ActionEnum>) => {
      if (state.total === 0 && state.input === '0') {
        return;
      }
      // When trying to set operator after pressing equal
      if (state.operator === null && state.total !== 0) {
        state.input = state.total.toString();
      }
      state.total = getUpdatedTotal(state);
      state.operator = action.payload;
      state.input = '0';
    },
  },
});

const getUpdatedTotal = (state: CalculatorState) => {
  // Division by zero prevention
  if (state.operator === ActionEnum.Division && state.input === '0') {
    return NaN;
  }
  // Decides which operation to do
  switch (state.operator) {
    case null:
      return parseFloat(state.input);
    case ActionEnum.Sum:
      return state.total + parseFloat(state.input);
    case ActionEnum.Subtraction:
      return state.total - parseFloat(state.input);
    case ActionEnum.Multiplication:
      return state.total * parseFloat(state.input);
    case ActionEnum.Division:
      return state.total / parseFloat(state.input);
    case ActionEnum.Percentage:
      return (state.total / 100) * parseFloat(state.input);
    default:
      return 0;
  }
};

export const {
  clear,
  changePlusMinus,
  getResult,
  setInput,
  setDecimal,
  setOperator,
} = calculatorSlice.actions;
export const selectCalculator = (state: RootState) => state.calculator;
export default calculatorSlice.reducer;
