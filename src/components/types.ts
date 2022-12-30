export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export type ButtonContainerProps = {
  startTimer: () => void;
  pauseTimer: () => void;
  stopTimer: () => void;
};
