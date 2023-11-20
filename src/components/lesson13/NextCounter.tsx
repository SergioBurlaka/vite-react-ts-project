import React, { useCallback, useEffect, useMemo, useState } from "react";

type UserType = {
  id: number;
  userName: string;
};

type NextCounterType = {
  mainCount: number;
};

import BlueButton from "./BlueButton";

const NextCounter = ({ mainCount }: NextCounterType) => {
  //   const [count, setCount] = useState<UserType[] | null>(null);
  //   const [count, setCount] = useState<UserType>({} as UserType);

  const [count, setCount] = useState<number>(0);

  type FibonacciFunctionType = (n: number) => number;

  const fib: FibonacciFunctionType = (n) => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
  };

  useEffect(() => {
    console.log("mounting");

    return () => console.log("unmount");
  }, []);

  const ClickHandler = useCallback(() => setCount((prev) => prev + 1), []);

  const Subtract = useCallback(() => setCount((prev) => prev - 1), []);

  const fibonacci = useMemo(() => {
    console.log("fire calculation 2");

    return fib(mainCount);
  }, [mainCount]);

  return (
    <div className="border-2 rounded-md p-4">
      <h2> mainCount {mainCount}</h2>
      <h2>Sum of Fibonacci {fibonacci}</h2>
      <BlueButton onClick={ClickHandler}>Add</BlueButton>
      <span>{count}</span>
      <BlueButton onClick={Subtract}>Sub</BlueButton>
    </div>
  );
};

export default NextCounter;
