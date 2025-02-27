import { useState } from "react";

import NumButton from "./NumButton";

function App() {
  const hi = () => console.log("ㅎㅇ");
  const hiUser = (name) => console.log(`${name}님 ㅎㅇ`);

  const arr = Array(101).fill(0);

  return (
    <>
      {/* <HelloButton click={hi} />
      <HelloButton click={() => hiUser("trump")} />
      <HelloButton
        click={() => {
          hiUser("trump");
          hiUser("trump");
          hiUser("trump");
        }}
      /> */}
      {arr.map((v, i) => {
        return <NumButton key={i} num={i} />;
      })}
    </>
  );
}

export default App;
