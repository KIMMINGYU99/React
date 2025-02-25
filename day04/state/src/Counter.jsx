import { useState } from "react";

const Counter = (props) => {
  const [num, setNum] = useState(0);
  const plus = () => setNum((prev) => prev + 2);
  const reset = () => setNum((prev) => (prev = 0));
  return (
    <div>
      <span>{num}</span>
      <button onClick={plus}>+ 2</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
