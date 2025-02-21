import BaseButton from "./Basebutton";

const DayButton = (props) => {
  const { day } = props;
  return <BaseButton text={day} />;
};

export default DayButton;
