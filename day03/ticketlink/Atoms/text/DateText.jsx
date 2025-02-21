import BaseText from "./BaseText";

const DateText = (props) => {
  const { date } = props;
  return <BaseText fontSize={"40px"} text={date} />;
};

export default DateText;
