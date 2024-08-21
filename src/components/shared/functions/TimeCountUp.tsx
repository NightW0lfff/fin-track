import React, { useState, useEffect, useRef } from "react";
import timeOutStep from "./TimeOutStep";

// const duration = 2000;
// const start = 0;
// const end = 4;
// let startTime = timeOutStep(duration, 2, 0, end >= 100 ? 100 : end);
// let timeout = 10;

interface Props {
  timeout?: number;
  duration: number;
  start?: number;
  end: number;
}

const ratio = 2;
let startTime = 1;

function TimeCountUp({ start = 0, end, duration, timeout = 1 }: Props) {
  const [val, setVal] = useState(start);
  const [timeOut, setTimeOut] = useState(timeout);
  const timeOutRef = useRef<number | null>(null);

  useEffect(() => {
    startTime = timeOutStep(
      duration,
      ratio,
      end - start > 100 ? 0 : start,
      end >= 100 ? 100 : end
    );
  }, []);

  useEffect(() => {
    timeOutRef.current = setTimeout(() => {
      if (end - val <= 100) startTime *= ratio;
      if (val < end) setVal(val + 1);
      if (timeOut < startTime) setTimeOut(startTime);
    }, timeOut);

    return () => {
      if (timeOutRef.current) clearTimeout(timeOutRef.current);
    };
  }, [val]);

  return (
    <div>
      {val}, {timeOut}
    </div>
  );
}

export default TimeCountUp;
