import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getIsTimerRunning, getTimerValue } from '../redux/store'; 
import { runTimer, addOneToTimer } from '../redux/actions'; 

const Timer = ({ runTimer, addOneToTimer, isTimerRunning, timerValue }) => {
  const tick = () => {
    addOneToTimer(1)
  };

  useEffect(() => {
    if (isTimerRunning) {
      var timerID = setInterval(() => tick(0), 1000);
    } else {
      addOneToTimer(-timerValue)
    }

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    <>
      <button
        className={isTimerRunning ? 'btn btn--stop': 'btn btn--run' }
        onClick={() => {
          runTimer();
          if (isTimerRunning) {
            tick();
          }
        }}
      >
        {isTimerRunning ? 'Stop' : 'Run'}
      </button>
      <hr />
      <div>Timer: {timerValue} </div>
    </>
  );
};

const mapStateToProps = state => ({
  isTimerRunning: getIsTimerRunning(state),
  timerValue: getTimerValue(state),
});

const mapDispatchToProps = dispatch => ({
  runTimer: () => dispatch(runTimer()),
  addOneToTimer: (value) => dispatch(addOneToTimer(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);