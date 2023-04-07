export interface IButton {
  action: () => void;
  className?: string;
  testId: string;
  value: string;
}

export enum ActionEnum {
  Sum,
  Subtraction,
  Multiplication,
  Division,
  Percentage,
}
