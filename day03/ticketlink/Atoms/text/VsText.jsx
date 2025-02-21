import BaseText from "./BaseText";

const VsText = (props) => {
  const { vs1, vs2 } = props;

  return (
    <div style={{ width: "150px", display: "flex", justifyContent: "start" }}>
      <BaseText
        fontWeight={"700"}
        fontSize={"16px"}
        text={vs1 + " vs " + vs2}
      />
    </div>
  );
};

export default VsText;
