import styles from "./styles/timer.module.css";
import { useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    setMinutes(e.target.value);
    setSeconds(e.target.value);

    let totalSeconds = minutes * 60 + seconds;

    const timer = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(timer);
      } else {
        totalSeconds--;
        const newMinutes = Math.floor(totalSeconds / 60);
        const newSeconds = totalSeconds % 60;
        setMinutes(newMinutes);
        setSeconds(newSeconds);
      }
    }, 1000);
  };

  return (
    <>
      <div className={styles.timer}>
        <div className={styles.timerContent}>
          <div className={styles.minutes}>
            <h1>{minutes.toString().padStart(2, "0")}</h1>
            <p>Minutos</p>
          </div>
          <div className={styles.seconds}>
            <h1>{seconds.toString().padStart(2, "0")}</h1>
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
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <input
              type="number"
              min="0"
              max="59"
              step="1"
              placeholder="00"
              id="seconds"
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            />
            <button onClick={handleClick}>Start</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
