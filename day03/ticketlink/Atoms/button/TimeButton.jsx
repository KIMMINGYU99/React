import BaseButton from "./Basebutton";

const TimeButton = (props) => {
  const { time } = props;
  return <BaseButton text={time} />;
};

export default TimeButton;
