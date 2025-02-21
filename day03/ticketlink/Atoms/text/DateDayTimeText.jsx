import DateText from "./DateText";
import DayTimeText from "./DayTimeText";

const DayDateTimeText = (props) => {
  const { date, day, time } = props;
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <DateText date={date} />
      <DayTimeText day={day} time={time} />
    </div>
  );
};

export default DayDateTimeText;
