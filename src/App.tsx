import React, { useState, useEffect, useMemo } from 'react';
import ButtonContainer from './components/ButtonContainer';

type TimerState = 'running' | 'paused' | 'stopped';

const PomodoroTimer: React.FC = () => {
  const [timerState, setTimerState] = useState<TimerState>('stopped');
  const [timeRemaining, setTimeRemaining] = useState(1500);

  const minutesRemaining = String(Math.floor(timeRemaining / 60)).padStart(
    2,
    '0',
  );
  const secondsRemaining = String(timeRemaining % 60).padStart(2, '0');

  const startTimer = useMemo(() => () => setTimerState('running'), []);
  const pauseTimer = useMemo(() => () => setTimerState('paused'), []);
  const stopTimer = useMemo(
    () => () => {
      setTimerState('stopped');
      setTimeRemaining(1500);
    },
    [],
  );

  useEffect(() => {
    if (timerState !== 'running') {
      return;
    }
    const interval = setInterval(() => {
      setTimeRemaining(timeRemaining - 1);
      if (timeRemaining <= 0) {
        const beep = document.getElementById('beep') as HTMLAudioElement;
        if (beep) {
          beep.currentTime = 0;
          beep.play();
        }
        stopTimer();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timerState, timeRemaining]);

  const timeRemainingInMinutes = (timeRemaining / 60).toFixed(0);

  return (
    <div className="bg-pink-500/80 h-screen w-screen flex flex-col items-center justify-center">
      <audio id="beep" src="/audio/beep.mp3" />

      <div className=" bg-pink-200/70 max-w-3xl mx-auto flex flex-col items-center justify-center gap-10 py-14 rounded-lg shadow shadow-pink-500/40 w-full">
        <div>
          <h1 className="text-9xl font-semibold text-gray-100 bg-pink-300 p-3 rounded-lg shadow shadow-pink-400/80">
            {minutesRemaining}:{secondsRemaining}
          </h1>
        </div>

        <ButtonContainer
          startTimer={startTimer}
          pauseTimer={pauseTimer}
          stopTimer={stopTimer}
        />
      </div>
    </div>
  );
};
export default PomodoroTimer;
