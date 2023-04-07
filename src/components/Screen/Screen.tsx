import React from 'react';
import { ActionEnum } from '../../types/types';
import { useAppSelector } from '../../hooks/hooks';
import classes from './Screen.module.scss';

const SMALL_SCREEN_LIMIT = 12;

const Screen = () => {
  const { operator, total, input } = useAppSelector(
    (state) => state.calculator
  );

  let screen = `${total}`;
  switch (operator) {
    case null:
      break;
    case ActionEnum.Sum:
      screen += ' +';
      break;
    case ActionEnum.Subtraction:
      screen += ' -';
      break;
    case ActionEnum.Multiplication:
      screen += ' x';
      break;
    case ActionEnum.Division:
      screen += ' /';
      break;
    case ActionEnum.Percentage:
      screen += ' %';
      break;
  }

  if (input !== '0' && total !== 0) {
    screen += ` ${input}`;
  }

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.label}>Total:</div>
        <div
          className={`${classes.total} ${
            total > SMALL_SCREEN_LIMIT * 100000000 ? classes.totalSmall : ''
          }`}
          data-testId='total'
        >
          {screen}
        </div>
      </div>
      <div
        className={`${classes.screen} ${
          input.length > SMALL_SCREEN_LIMIT ? classes.screenSmall : ''
        }`}
        data-testId='screen'
      >
        {input}
      </div>
    </React.Fragment>
  );
};

export default Screen;
