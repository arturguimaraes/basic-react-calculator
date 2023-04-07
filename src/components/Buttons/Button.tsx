import React from 'react';
import classes from './Button.module.scss';

type Props = {
  action: () => void;
  className: string | undefined;
  testId: string;
  value: string;
};

const Button = ({ action, className, testId, value }: Props) => {
  return (
    <button
      data-testid={testId}
      className={`${classes.button} ${className ? className : ''}`}
      onClick={action}
    >
      {value}
    </button>
  );
};

export default Button;
