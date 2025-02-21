import BaseText from "./BaseText";

const DayText = (props) => {
  const { day } = props;
  return <BaseText color={"grey"} fontSize={"13px"} text={"(" + day + ")"} />;
};

export default DayText;
