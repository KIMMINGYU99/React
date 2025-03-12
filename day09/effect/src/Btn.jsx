import { bearStore } from "./store";

const Btn = ({}) => {
  const { bears } = bearStore();
  return <button>버튼 {bears}</button>;
};

export default Btn;
