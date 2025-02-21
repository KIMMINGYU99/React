const BaseButton = (props) => {
  const { text } = props;
  return (
    <button
      style={{
        fontWeight: "bolder",
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      {text}
    </button>
  );
};

export default BaseButton;
