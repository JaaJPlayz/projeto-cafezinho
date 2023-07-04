import styles from "./styles/timer.module.css";
import { useState, useEffect } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let totalSeconds = minutes * 60 + seconds;
    let timer;

    if (isTimerRunning && totalSeconds > 0) {
      timer = setInterval(() => {
        totalSeconds--;
        const newMinutes = Math.floor(totalSeconds / 60);
        const newSeconds = totalSeconds % 60;
        setMinutes(newMinutes);
        setSeconds(newSeconds);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds, isTimerRunning]);

  const handleMinutesChange = (e) => {
    const value = parseInt(e.target.value);
    setMinutes(value > 59 ? 59 : value);
  };

  const handleSecondsChange = (e) => {
    const value = parseInt(e.target.value);
    setSeconds(value > 59 ? 59 : value);
  };

  const handleClick = () => {
    setIsTimerRunning((prevIsTimerRunning) => !prevIsTimerRunning);
  };

  return (
    <div className={styles.timer}>
      <div className={styles.timerContent}>
        <div className={styles.minutes}>
          <h1>{minutes === 0 || isNaN(minutes) ? "00" : minutes.toString().padStart(2, "0")}</h1>
          <p>Minutos</p>
        </div>
        <div className={styles.seconds}>
          <h1>{seconds === 0 || isNaN(seconds) ? "00" : seconds.toString().padStart(2, "0")}</h1>
          <p>Segundos</p>
        </div>
        <div className={styles.inputsDiv}>
          <input
            type="number"
            min="0"
            max="59"
            step="1"
            placeholder="00"
            id="minutes"
            value={isNaN(minutes) ? "" : minutes}
            onChange={handleMinutesChange}
          />
          <input
            type="number"
            min="0"
            max="59"
            step="1"
            placeholder="00"
            id="seconds"
            value={isNaN(seconds) ? "" : seconds}
            onChange={handleSecondsChange}
          />
          <button onClick={handleClick}>{isTimerRunning ? "Stop" : "Start"}</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;

