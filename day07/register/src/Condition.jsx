import { FaCheck } from "react-icons/fa6";
const Condition = ({ condition, isChecked }) => {
  return (
    <span
      style={{
        fontWeight: 700,
        fontSize: "10px",
        color: isChecked ? "greenyellow" : "grey",
      }}
    >
      <FaCheck /> {condition}
    </span>
  );
};

export default Condition;
