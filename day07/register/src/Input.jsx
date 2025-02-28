const Input = ({ text, setInputValue }) => {
  return <input onChange={setInputValue} type="text" placeholder={text} />;
};

export default Input;
