import BaseText from "./BaseText";

const TimeText = (props) => {
  const { time } = props;
  return <BaseText color={"grey"} fontSize={"17px"} text={time} />;
};

export default TimeText;
