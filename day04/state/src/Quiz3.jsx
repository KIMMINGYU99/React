import { useState } from "react";

const Quiz3 = () => {
  const emojiArr = ["🥚", "🐤", "🐔", "🍗"];
  const [num, setNum] = useState(0);
  const next = () => {
    setNum((prev) => (prev >= emojiArr.length - 1 ? prev : prev + 1));
  };

  const before = () =>
    setNum((prev) => {
      return prev <= 0 ? prev : prev - 1;
    });

  return (
    <>
      <button onClick={before}>이전</button>
      <span>{emojiArr[num]}</span>
      <button onClick={next}>다음</button>
    </>
  );
};

export default Quiz3;
