import Detail from "./detail";
import Title from "./Title";

const Card = (props) => {
  const { title, detail, detail_1, detail_2 } = props;
  return (
    <div style={{ display: "flex" }}>
      <Title title={title}></Title>
      <Detail detail={detail} detail_1={detail_1} detail_2={detail_2}></Detail>
    </div>
  );
};

export default Card;
