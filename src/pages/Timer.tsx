import { TimerHook } from "../hooks/TimerHook";

const Timer = () => {
  return (
    <>
      <div className="timer">
        <TimerHook deadline="2023-05-26T10:16:30" />
      </div>
    </>
  );
};

export default Timer;
