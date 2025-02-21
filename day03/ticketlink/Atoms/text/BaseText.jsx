const BaseText = (props) => {
  const { text, fontSize, fontWeight, color } = props;
  return (
    <span
      style={{
        display: "flex",
        fontSize,
        fontWeight,
        color,
      }}
    >
      {text}
    </span>
  );
};

export default BaseText;
