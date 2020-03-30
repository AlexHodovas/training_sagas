import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getIsTimerRunning, getTimerValue } from '../redux/store';
import { runTimer, addOneToTimer } from '../redux/actions';

const Timer = ({ runTimer, addOneToTimer, isTimerRunning, timerValue, getItemFromLocalStorage }) => {
  const tick = () => {
    addOneToTimer(1)
  };

  useEffect(() => {

    /* this code puts info to local storage */
      localStorage.setItem('TEST_ITEM', JSON.stringify({startTime: Date.now()}));
      /* this will fire action to read from local storage */
      getItemFromLocalStorage();


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
  timerValue: getTimerValue(state).time,
});

const mapDispatchToProps = dispatch => ({
  runTimer: () => dispatch(runTimer()),
  addOneToTimer: (value) => dispatch(addOneToTimer(value)),
  getItemFromLocalStorage: () => dispatch({type : 'GET_STORAGE_ITEM'})
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
