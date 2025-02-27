const NumButton = (props) => {
  const { num } = props;
  const number = (num) => console.log(`누르신 번호는 ${num}입니다`);
  return <button onClick={() => number(num)}>{num}</button>;
};

export default NumButton;
