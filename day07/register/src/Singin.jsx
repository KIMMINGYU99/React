const Singin = ({ isChecked }) => {
  return (
    <button
      style={{
        width: "300px",
        textAlign: "center",
        padding: "10px 0",
        borderRadius: "30px",
        color: isChecked ? "white" : "black",
        backgroundColor: isChecked ? "black" : "white",
      }}
    >
      가입하기
    </button>
  );
};

export default Singin;
