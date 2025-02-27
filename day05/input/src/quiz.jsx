import { useState } from "react";

const Cnt = (props) => {
  const { number, plusFunc, minusFunc } = props;

  return (
    <div>
      <button onClick={minusFunc}>-</button>
      <span>{number}</span>
      <button onClick={plusFunc}>+</button>
    </div>
  );
};

export default Cnt;
