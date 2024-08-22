import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const TimerCircle = () => (
  <CountdownCircleTimer
    isPlaying
    duration={1000}
    colors={["#D3ED68", "#F7B801", "#A30000", "#A30000"]}
    colorsTime={[7, 5, 2, 0]}
    size={92}
  >
    {({ remainingTime }) => (
      <div style={{ textAlign: "center" }}>
        <div className="timer__number">{remainingTime}</div>
        <div className="timer__desc">Times traveled</div>
      </div>
    )}
  </CountdownCircleTimer>
);
