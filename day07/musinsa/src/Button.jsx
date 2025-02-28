const Button = ({ clickBtn, color, backgroundColor }) => {
  return (
    <>
      <div
        onClick={clickBtn}
        style={{
          width: "560px",
          height: "30px",
          padding: "12px 16px",
          borderRadius: "10px",
          fontSize: "13px",
          color,
          backgroundColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        동의하고 본인인증하기
      </div>
    </>
  );
};

export default Button;
