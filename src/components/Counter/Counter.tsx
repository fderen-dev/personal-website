import React, {
  FunctionComponent,
  useState,
  useEffect,
  useRef,
  MutableRefObject,
} from 'react';

interface CounterProps {
  targetValue: number;
  timeMs: number;
  start: boolean;
}

const Counter: FunctionComponent<CounterProps> = props => {
  const { targetValue, timeMs, start } = props;
  const [displayValue, setDisplayValue] = useState<number>(0);
  const intervalHandlerRef: MutableRefObject<NodeJS.Timeout | null> = useRef(
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
  }, [start]);

  useEffect(() => {
    if (displayValue === targetValue && intervalHandlerRef.current !== null) {
      clearInterval(intervalHandlerRef.current);
      intervalHandlerRef.current = null;
    }
  }, [displayValue]);
  return <span>{displayValue}</span>;
};

export default Counter;
