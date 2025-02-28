import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Condition from "./Condition";
import Singin from "./Singin";

function App() {
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

  const [idInputValue, setIdInputValue] = useState("");
  const idChange = (e) => setIdInputValue((prev) => e.target.value);

  const [passwordInputValue, setPasswordInputValue] = useState("");
  const passwordChange = (e) => setPasswordInputValue((prev) => e.target.value);

  const idLength = idInputValue.length > 6 && idInputValue.length < 20;
  const pwLength =
    passwordInputValue.length > 8 && passwordInputValue.length < 20;
  const pwSpecial = regExp.test(passwordInputValue);

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <Input setInputValue={idChange} text={"아이디 입력"} />
        <Button isChecked={idLength} />
      </div>
      <Condition isChecked={idLength} condition={"6~20자 내외"} />
      <div>
        <Input setInputValue={passwordChange} text={"비밀번호 입력"} />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Condition isChecked={pwLength} condition={"8~20자 내외"} />
        <Condition isChecked={pwSpecial} condition={"특수문자 포함"} />
      </div>
      <Singin isChecked={idLength && pwLength && pwSpecial} />
    </>
  );
}

export default App;
