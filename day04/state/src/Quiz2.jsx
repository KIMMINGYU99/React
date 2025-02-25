import { useState } from "react";

const Quiz2 = () => {
  const [num2, setNum2] = useState(0);

  const plus = () => {
    setNum2((prev) => prev + 1);
  };

  const minus = () =>
    setNum2((prev) => {
      return prev <= 0 ? (prev = 0) : prev - 1;
    });
  const reset = () => setNum2((prev) => (prev = 0));

  return (
    <>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={reset}>reset</button>
      <div style={{ color: num2 >= 10 ? "blue" : "black" }}>{num2}</div>
    </>
  );
};

export default Quiz2;

const tw = (a, b) => a + b;
