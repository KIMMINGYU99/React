import "./Jinair.css";
import { FaCheck } from "react-icons/fa";

const Jinair = (props) => {
  return (
    <article id="cardBox" className={props.cardBoxColor || ""}>
      <div id="top" className={props.selecttop || ""}>
        <div id="title">
          <div>
            <strong style={{ fontSize: "25px" }}>{props.name}</strong>
            <p>KRW {props.price}</p>
          </div>
          <span id="checkBox">
            <FaCheck />
          </span>
        </div>
        <span>{props.seatCnt}석</span>
      </div>

      <div id="bottom">
        <ul>
          <li>
            <span>변경 수수료</span>
            <span>KRW {props.changePrice}</span>
          </li>
          <li>
            <span>환불 위약금</span>
            <span>KRW {props.refundPrice}</span>
          </li>
          <li>
            <span>무료 위탁 수화물</span>
            <span>{props.checkedBaggage}kg</span>
          </li>
          <li>
            <span>무료 기내 수화물</span>
            <span>{props.cabinBaggage}kg</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Jinair;
