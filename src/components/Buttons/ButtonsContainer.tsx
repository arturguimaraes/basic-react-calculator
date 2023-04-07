import React from 'react';
import Button from './Button';
import { IButton } from '../../types/types';
import classes from './ButtonsContainer.module.scss';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  buttons: IButton[];
};

const ButtonsContainer = ({ buttons }: Props) => {
  return (
    <div className={classes.buttonsContainer}>
      {buttons.map((button: IButton) => (
        <Button
          key={uuidv4()}
          action={button.action}
          className={button.className}
          testId={button.testId}
          value={button.value}
        />
      ))}
    </div>
  );
};

export default ButtonsContainer;
