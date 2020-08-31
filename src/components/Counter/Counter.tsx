import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  targetValue: number;
  timeMs: number;
  start: boolean;
}

const Counter: React.FunctionComponent<CounterProps> = props => {
  const { targetValue, timeMs, start } = props;
  const [displayValue, setDisplayValue] = useState<number>(0);
  const intervalHandlerRef: React.MutableRefObject<NodeJS.Timeout | null> = useRef(
    null
  );

  useEffect(() => {
    if (start === true) {
      if (intervalHandlerRef.current === null) {
        intervalHandlerRef.current = setInterval(() => {
          setDisplayValue(prevValue => prevValue + 1);
        }, timeMs / 100);
      }
    } else {
      if (intervalHandlerRef.current !== null) {
        clearInterval(intervalHandlerRef.current);
        intervalHandlerRef.current = null;
      }
      setDisplayValue(0);
    }
  }, [start, timeMs]);

  useEffect(() => {
    if (displayValue === targetValue && intervalHandlerRef.current !== null) {
      clearInterval(intervalHandlerRef.current);
      intervalHandlerRef.current = null;
    }
  }, [displayValue, targetValue]);
  return <span>{displayValue}</span>;
};

export default Counter;
