import { TimerHook } from "../hooks/TimerHook";

import styles from "./styles/timer.module.css";

const Timer = () => {
  return (
    <>
      <div className={styles.timer}>
        
        <TimerHook deadline="2023-05-26T10:16:30" />
      </div>
    </>
  );
};

export default Timer;
