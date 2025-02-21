import Jinair from "./Jinair";

const jinairArr = [
  {
    name: "슈퍼로우",
    price: 0,
    seatCnt: "-",
    changePrice: 60000,
    refundPrice: 100000,
    checkedBaggage: 15,
    cabinBaggage: 10,
    selecttop: false,
    cardBoxColor: "cardBoxColor",
  },
  {
    name: "플렉스",
    price: 294200,
    seatCnt: 9,
    changePrice: 40000,
    refundPrice: 100000,
    checkedBaggage: 15,
    cabinBaggage: 10,
    selecttop: "selecttop",
    selectCheck: "selectCheck",
    cardBoxColor: false,
  },
  {
    name: "지니",
    price: 419200,
    seatCnt: 9,
    changePrice: 20000,
    refundPrice: 70000,
    checkedBaggage: 15,
    cabinBaggage: 10,
    selecttop: false,
    cardBoxColor: false,
  },
];
const jinairBox = jinairArr.map((v) => {
  return <Jinair {...v} />;
});

function App() {
  return (
    <article style={{ display: "flex", gap: "20px" }}>{jinairBox}</article>
  );
}

export default App;
