import { useEffect, useState } from 'react';
import style from './timer.module.css';

interface TimerProps {
  color: string; // Pass the border color as a prop
}

const notify = () => {
  const ctx = new (window.AudioContext)();
  const oscillator = ctx.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(440, ctx.currentTime);
  oscillator.connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.3);
  const synth = window.speechSynthesis;
  const phrase = new SpeechSynthesisUtterance("the timer is over!");
  synth.speak(phrase);
};

const Timer = ({ color }: TimerProps) => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [inputTime, setInputTime] = useState('');
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    // Stop the timer when it reaches zero
    if (time === 0 && isRunning) {
      setIsRunning(false);
      notify();
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleToggle = () => {
    if (time > 0) {
      setIsRunning(!isRunning);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTime(event.target.value);
  };

  const handleSetTime = () => {
    const [hours, minutes, seconds] = inputTime.split(':').map(Number);
    const totalSeconds = (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0);
    setTime(totalSeconds);
    setIsRunning(false); // Ensure the timer is stopped when setting a new time
  };

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className={style.timer}>
      <div>
        <input
          type="text"
          placeholder="00:00:00"
          value={inputTime}
          onChange={handleInputChange}
        />
        <button onClick={handleSetTime}>Set&nbsp;&#x231b;</button>
      </div>
      <p
        className={style.time}
        style={{ textShadow: `1px 1px 1px blue`, border: `4px solid ${color}` }}
      >
        {formatTime(time)}
      </p>
      <button onClick={handleToggle}>
        {isRunning ? '⏸️ Stop' : '▶️ Start'}
      </button>
    </div>
  );
};

export default Timer;
