import { useState } from "react";

const Quiz = () => {
  const [num, setNum] = useState(0);
  return <div onClick={() => setNum((prev) => prev + 5)}>{num}</div>;
};

export default Quiz;
