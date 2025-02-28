const Button = ({ isChecked }) => {
  return (
    <button
      style={{
        color: isChecked ? "white" : "grey",
        backgroundColor: isChecked ? "black" : "#efefef",
        fontWeight: "700",
      }}
    >
      중복확인
    </button>
  );
};

export default Button;
