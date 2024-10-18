import { useEffect, useRef, useState } from "react";

interface CountDownHook {
  counter: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
}

export const useCountDown: (total: number, ms?: number) => CountDownHook = (
  total: number,
  ms: number = 1000
) => {
  const [counter, setCountDown] = useState(total);
  const [startCountDown, setStartCountDown] = useState(false);

  const intervalId = useRef<NodeJS.Timer | number>();
  const startTime = useRef<number>(0);
  const remainingTime = useRef<number>(total * ms);

  const start = () => {
    if (!startCountDown) {
      setStartCountDown(true);
      startTime.current = Date.now();
    }
  };

  const pause = () => {
    if (startCountDown) {
      setStartCountDown(false);
      remainingTime.current =
        remainingTime.current - (Date.now() - startTime.current);
    }
  };

  const reset = () => {
    clearInterval(intervalId.current as number);
    setStartCountDown(false);
    setCountDown(total);
    remainingTime.current = total * ms;
  };

  useEffect(() => {
    if (startCountDown) {
      intervalId.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime.current;
        const timeLeft = Math.max(0, remainingTime.current - elapsedTime);

        setCountDown(Math.ceil(timeLeft / ms));

        if (timeLeft <= 0) {
          clearInterval(intervalId.current as number);
          setStartCountDown(false);
        }
      }, 100);

      return () => clearInterval(intervalId.current as number);
    }
  }, [startCountDown, ms]);

  return { counter, start, pause, reset };
};
