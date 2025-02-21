import BaseText from "./BaseText";

const PlaceText = (props) => {
  const { place } = props;
  return (
    <BaseText
      color={"grey"}
      fontWeight={"bolder"}
      fontSize={"13px"}
      text={place}
    />
  );
};

export default PlaceText;
