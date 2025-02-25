import Button from "./Button";
import ChangeColor from "./ChangeColor";
import Chicken from "./Chicken";
import Counter from "./Counter";
import Quiz from "./Quiz";
import Quiz2 from "./Quiz2";
import Quiz3 from "./Quiz3";
import Review from "./Review";

function App() {
  return (
    <>
      <Button handle={() => alert("점심먹고싶음")} />
      <Button handle={() => console.log("점심먹고싶음 그만먹으삼")} />
      <Button handle={() => console.log("점심먹고싶음")} />
      <Quiz />
      <Quiz2 />
      <Quiz3 />
      <Chicken />
      <div
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "30px",
          color: "grey",
        }}
      >
        <Review text={"추천 · 구독"} /> /
        <Review text={"자동차"} /> /
        <Review text={"웹툰"} /> /
        <Review text={"패션뷰티"} />
      </div>
      <Counter />
      <ChangeColor />
    </>
  );
}

export default App;
