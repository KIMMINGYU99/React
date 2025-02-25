import Button from "../components/Button";
import Img from "../components/Img";
import Place from "../components/Place";
import Schedule from "../components/Schedule";
import VSText from "../components/VStext";

const Match = (props) => {
  const {
    date,
    day,
    time,
    firstImg,
    secondImg,
    firstTeam,
    secondTeam,
    place,
    btnDate,
    btnDay,
    btnTime,
  } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "90vw",
        margin: "0 auto",
      }}
    >
      <Schedule date={date} day={day} time={time} />
      <Img firstImg={firstImg} secondImg={secondImg} />
      <VSText firstTeam={firstTeam} secondTeam={secondTeam} />
      <Place place={place} />
      <Button btnDate={btnDate} btnDay={btnDay} btnTime={btnTime} />
    </div>
  );
};

export default Match;
