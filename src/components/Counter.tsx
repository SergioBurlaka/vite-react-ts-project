import React, { ReactNode } from "react";

import Button from "./Button";

type CounterType = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children?: ReactNode;
};

const Counter = ({ children, setCount }: CounterType) => {
  return (
    <div className="border-2 rounded-md p-4">
      <div>Counter</div>
      <div className="flex   gap-2">
        <Button onClick={() => setCount((prev) => prev + 1)}>
          &#65291;
        </Button>
        <div>{children}</div>
        <Button onClick={() => setCount((prev) => prev - 1)}>
          &#65293;
        </Button>
      </div>
      <button onClick={() => setCount(0)}> Reset</button>
    </div>
  );
};

export default Counter;

