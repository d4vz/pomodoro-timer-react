import React from 'react';
import Button from './Button';
import { ButtonContainerProps } from './types';

const ButtonContainer = (props: ButtonContainerProps) => {
  return (
    <div className="flex gap-3">
      <Button onClick={props.startTimer}>START</Button>
      <Button onClick={props.pauseTimer}>PAUSE</Button>
      <Button onClick={props.stopTimer}>RESET</Button>
    </div>
  );
};

export default ButtonContainer;
