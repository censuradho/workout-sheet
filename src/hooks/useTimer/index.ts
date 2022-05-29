import { useCallback, useEffect, useReducer } from 'react';
import reducer from './state/reducer';
import { Config, ReturnValue } from './types'

export function useTimer ({
  autostart,
  endTime,
  initialStatus = 'STOPPED',
  initialTime = 0,
  interval = 1000,
  onTimeOver,
  onTimeUpdate,
  /**in millisecond*/
  step = 1000,
  timerType = 'INCREMENTAL',
}: Partial<Config> = {}): ReturnValue {
  const [state, dispatch] = useReducer(reducer, {
    status: initialStatus,
    time: initialTime,
    timerType,
  });

  const { status, time } = state

  const advanceTime = useCallback((timeToAdd) => {
    dispatch({ type: 'advanceTime', payload: { timeToAdd } });
  }, []);

  const pause = useCallback(() => {
    dispatch({ type: 'pause' });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'reset', payload: { initialTime } });
  }, [initialTime]);

  const start = useCallback(() => {
    dispatch({ type: 'start', payload: { initialTime } });
  }, [initialTime]);

  useEffect(() => {
    if (autostart) dispatch({ type: 'start', payload: { initialTime } });
  }, [autostart, initialTime]);

  useEffect(() => {
    onTimeUpdate?.(time);
  }, [time, onTimeUpdate]);

  useEffect(() => {
    if (status !== 'STOPPED' && time === endTime) {
      dispatch({ type: 'stop' });

      onTimeOver?.();
    }
  }, [endTime, onTimeOver, time, status]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (status === 'RUNNING') {
      intervalId = setInterval(() => {
        dispatch({
          type: 'set',
          payload: {
            newTime: timerType === 'DECREMENTAL' ? time - step : time + step,
          },
        });
      }, interval);
    } else if (intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [status, step, timerType, interval, time]);

  return { advanceTime, pause, reset, start, status, time };

}